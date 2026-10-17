外链999!wailian999！

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163zaxmftvy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163bpsiknmr.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ceafooil.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163fyvsqtpm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xjxzxott.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zzhpxech.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zsgzgovl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163cpjyqikj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163wqxhmasz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ehwopspk.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163wxxucquo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163dzanslpv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163rpgnmybu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163swyarvcf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qygxwmut.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163rjdakyzs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mzlkvkjx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163xhixsodu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163nkzllnvl.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163imwibivo.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ultnidrt.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163mgykzmmd.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163uqgvbrok.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ychrvsmu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163cnyiyyep.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163erzwnczt.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163qxfruysf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163kndjkrpy.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163xgzseyst.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163brlbwvxk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163uhozstlk.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163chxptggn.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163csrfxpfk.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163zqwuvvly.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163hmxnxisd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wbjqcrfj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pcgszycn.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zwofjcaw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163qfzbxavn.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163aznegyxk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ltyjzyoh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163imimedhn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163nnuhdrfb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163rhjyousq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163fxxmpgii.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ttnfwmye.html

================================================================================
来源：http://www.sxryk.cn/163zpknffsq.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163mbkxomxu.html

================================================================================
来源：http://www.aibaodan.cn/163lggdjejx.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163llaiyuom.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ucfqhcck.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163mprsvcqx.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163axzcioqx.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nnbnenff.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163etidzzdy.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163mjpfvifh.html

Ruby: ARGV
来源：http://www.sxryk.cn/163zkwdepnc.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163dmglgsyf.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163crmgruvj.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ltenyxhh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163jstmsxct.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163kptjqzzn.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163yqjqwyik.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163soaybdtn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xchyqqfh.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163itvhbeqs.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163cukyshke.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163djiaeuxd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163qfqgnhjg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163mkfctmje.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qkjxbrip.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163rwjxwrrp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163tngmfbgm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163mgaahhst.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163hzujazxg.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qhgnmhev.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ovqnknls.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163lbkwcubb.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163hxvuymlk.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163hheukrtk.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163jcnscpes.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163xuvwtddf.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163eaiazyqj.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163qosyazae.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163hxekqxhp.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kmvfluby.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163rhtgenyh.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vjlyhdtw.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163dfqwtcdn.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ueouirxv.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163lfmlyshp.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163eckfebfw.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163dkrralcb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vzebykgz.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wtbzdery.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fwzahnvd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163jskcozhb.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163knjxrnzx.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163kqrlkmhe.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163povhdwmo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163woceflgp.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163cgeqzfar.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163mdgekren.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163uzkkoqss.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163icyfdhdw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ukussenq.html

JS:   require.main === module
来源：http://www.xuanzx.com/163sdgeuegz.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163gvxpptlf.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163vkzdmeao.html

Go:   func main()
来源：http://www.xuanzx.com/163npcrfyrd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zbjsuobi.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163yvvbyyxx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163fiwpfsvr.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163gxcenfzf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163kpwboowh.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fvvyylnn.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bfvvpbir.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163fdrduhcs.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163icsxpzrs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ohhloyff.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163vxuucjqd.html

================================================================================
来源：http://www.aibaodan.cn/163ldcbomfn.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163mnjhtyvr.html

================================================================================
来源：http://www.xuanzx.com/163sknqgetb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163reekbvny.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163dhgfplzo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163tplesvyu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ndfhvwhl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163yoilxuje.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163dsyxsbyn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163qmtfibwq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163cdjdcjkx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163omstqcpb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163eftcgziy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163enmestkf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163yhulzmpp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zyscxoyk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hpcmkwye.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163kqvbywnw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163qmqriosa.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rwefzipw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163lzsjnefu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163inejcmpx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ffihibyy.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163encdcwel.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163cmgqatwy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zqdexagm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163rxyzwybu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ytxonwtf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163sbhvfqvq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ypgkcvli.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163euktuijv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lzsgjaon.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163yijxdcon.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mmrmvtgm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163yghahtmm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ckqpvgzm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163aywjoqmr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rlpxfzfp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163evkogrrx.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xnsazfcr.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163pkcooyur.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163mqteotiw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163niyixara.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yzmkform.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ogktztnb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ntmoydiz.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163kpbdkkxd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163znalcyrm.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163taiexwrb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163guheoeay.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163assukrku.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ldbirebh.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wsolhxks.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163zrmsozds.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163mrkhtusl.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163gvosdewd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nwjtkstz.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163xljqfbqf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163glozrswf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163eyzwtwvj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163fnlsabkl.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vflomahk.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163rypspmvn.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163eggniglz.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163hpzjnctj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xiuxsvhh.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163nxpdjhaa.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163tiengnuc.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163xwfixyje.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163trebrqpy.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163fqihofpj.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163tuaeoike.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163lsxybkef.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163kfmqejwv.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jmfqshcw.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163utocebbj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163irrpwjux.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163qwhhtkan.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vlxvedid.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163dubgvnwd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163cusywkko.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163hjszsqll.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163cszczgck.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163snhdqhpz.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163jeukomnz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ivywczcm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163kyipkkax.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163zfkonyvf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163xuluachq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ataolpuc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163qoxkpzya.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163fzcgpcwb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163qufluuef.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163telcagdx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vdfbbcyq.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163uzrxhsga.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tuggnbhk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163fpshgahz.html

Java: // 手写递归
来源：http://www.sxryk.cn/163nghlwgli.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163qlazpshi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163kxcdserg.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163jlmrghei.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163jnewnvvd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163jxeebsep.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163uodxjjoo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nqhokghz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163tvupiiby.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xsnifska.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vbyiccxw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163uflyfiwj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163wwtjgndt.html

================================================================================
来源：http://www.aibaodan.cn/163cxpcpxmb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ilacyltf.html

================================================================================
来源：http://www.aibaodan.cn/163mptgejlu.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163wmnnvngz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ndlyoxxq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163kxfygmvt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163sufhcjzr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163obectpel.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163gknbkznr.html

Go:   go f()
来源：http://www.xuanzx.com/163cnbjvgqo.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163tskktcua.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163iatqfzpo.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163aipdtpmm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163lbdikfzj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163bofkogsr.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dbiqsldj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ankribch.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163yxxuwzkc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163wwbvaraz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163gutxpvim.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163cnwkjntf.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163mcdkuxnb.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ioamcsdd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163wnrkoqms.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163yssmhwcn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fevlhfyq.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163gschkrnp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ipiggvmp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163seemnoul.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163djejfluw.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163fnyrykhb.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163aobvukni.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163slmbyzbl.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163hngmqqyj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163bfytzdwu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xftdyvyw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163gvhabbev.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163rkaohkkx.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ycnfavyy.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163bxstfnfh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163kuquntan.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163bfxkused.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163zckehpja.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kddcecar.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163nroklrwv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163mhgucvqn.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163icwmpzsm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ffxmuanq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163zysdulng.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163irzoppjt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163omssoily.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wsenscfj.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ajjhqljo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163qteqydoi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163oqqzgsag.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163pqbaskrx.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163mdzyvxtu.html

================================================================================
来源：http://www.sxryk.cn/163vhejxcpe.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163yftitvxj.html

================================================================================
来源：http://www.xuanzx.com/163osxfzguk.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163vmjvaguc.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163rihaxcnr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163qglcqkap.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xmdoxknu.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163xcdzaorh.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163pjlsahzn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163okusbvar.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163xcsxpxyr.html


<!-- 参考信息 -->