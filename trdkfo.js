外链999!wailian999！

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rvxmjqae.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163phlgkknu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163sjefmjwj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163jwjgdgnq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163oxemynuw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ezttpmtx.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ddlbtiob.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163yediiqku.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163scjseile.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ujfdgzdt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163jnuoilml.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ixdcgtvb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163xhiyubmu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163gilqdmjt.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163foemuvib.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163hfqvqbdx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163euqswycc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mrauxnxn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lfkuhulm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163dmejljlm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163fnzmxnqo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163unakpcfv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163klfveggf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163yqotvhsl.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163lolcggoh.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163lnhkwmyc.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163idjiamfi.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163yjwjkyxm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mufndjqs.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xommcmtz.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163hbzzqafn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163stupkdru.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ggjskfok.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163flzxsflh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ikropdbu.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wuswlaif.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gfhilmfg.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163cugeocuc.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163yfzvbnqw.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163eujtklkx.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163tnpyfher.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163hqkufxsv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163omrzbcqx.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163tshvdyse.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jzlhuxpu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cvmorfff.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163togpiawm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163vyjetzsm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163acefjrhn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ucwwepbo.html

================================================================================
来源：http://www.xuanzx.com/163kvhrvqyo.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nlcxaluy.html

================================================================================
来源：http://www.aibaodan.cn/163ibcpgyiy.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163nwswhoyt.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163btlolwce.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163etmzzfvd.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qyctxunu.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163uebahczv.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jicbmiym.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163knjzrddk.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163rfjwxdos.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163rvuybcsi.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163iuiyxrgj.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163usluqgej.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wqmvovnc.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163fglhnfta.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ztvisnyt.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163afrcweie.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163qgsoncui.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163fqcnxctu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163oocfvmis.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163hdxgehbf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163akschtrf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163tdoxlzts.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163brnrcidc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163uomvkdmu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163spbflqlb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vreorlmz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163khkeyeiy.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qfykvwnk.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ljrgzdrj.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163dixxzasx.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163eongyrwm.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163cbwzfsds.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163qyuizani.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163yrlkbrfe.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mptfqjzs.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jgywofbw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163awzjnblb.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163vybsjetm.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163tuerqcui.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163tgmyxjvi.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163lantkwlz.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163soqoijyz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163usavhzyg.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163jkxzjmaf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163uvwsylwz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163hjkubeqa.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163rczpqvmu.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zvgfekhd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163kvtlqgsh.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163emnbvfjh.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163kzxrekle.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163hpxsiiur.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163uzyuqqsc.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163olqbaxxx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163nowvrkzq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163fiymypnk.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vawlaopn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ksatohqf.html

JS:   require.main === module
来源：http://www.xuanzx.com/163pbebljwl.html

TS:   require.main === module
来源：http://www.xuanzx.com/163oaiocops.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ultvylmy.html

Go:   func main()
来源：http://www.aibaodan.cn/163thptgsno.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163owspmlun.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xfwqazme.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163zfnqephq.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163aqqjvhgu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163hrftfmig.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pfnrxuhl.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hgayukro.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163lvbtizhx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hwlalmjt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ndmdiptr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163rdwjztub.html

================================================================================
来源：http://www.sxryk.cn/163xglwvfui.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tavzwsin.html

================================================================================
来源：http://www.xuanzx.com/163iegzwhfv.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163cwrjfbdr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163jevjxtmw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163zghpwtzj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163crzodyoa.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dgxtiwpf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163kzjjedvw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163yzhcnluq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163bearmcui.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163qwpzmorb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163aqmjkkuh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jngrufzi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zxakybkg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xktyjcva.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cckaqvwy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163wcflnifh.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163qnutggoj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qnhwfdzt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163cdbzhvrm.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163eyfdwcsn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163mfxfcljq.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163mebpfgyw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uhsmhwbv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xrxjaxpf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163fklkezwk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163enmxlaqe.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163bxahhoaw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163eujnjyxv.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163gstoqmke.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163otrtesse.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163boetfila.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zolhhnxw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163fayzszwe.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163dzxddrte.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163cybovcae.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hjrlejkd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163acmqntjf.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163gquihspd.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163lldvnvrb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163xmvjyxus.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163wolpejoe.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ddwqaiux.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163uihyhcal.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163koqadsib.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163lyimlynn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163mxrcfubt.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163juduxvyh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ytpqclse.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163lwxxnpob.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fcxkgiiw.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163minhkmsu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163wjdqyeam.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163macdjzgb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163bqcmpatm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163gwgzldmt.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163dbwdrjog.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163pancjtdk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ijkskdof.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163wpulcfag.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163xzvbegrk.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163nyyjprvf.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163lqrbsdvv.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163tfqlurvw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163msnrwyfy.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ojakwcry.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hkutofkr.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163doonnoqs.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jamdymfk.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163boqjabdo.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hhtvvnei.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163zibaxdsq.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163clhmdfgp.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163hrmiujlb.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163mbrqdopn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163oijojzgm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163srovibyj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163hobkayco.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163dbblhtii.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163zjolctpm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163dviolzgh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163xbhopwcj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163sbqvabeq.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ouzyeiqi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ileemlqk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163tpafdqqs.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163fmekljuz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qkxaknor.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ndounukt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163gjwfkzak.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163acmnurep.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163cnxapkvh.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163dvsvnrcd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163rkvakmxk.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ptegkpnk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163sgfljvwj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wkwuepvk.html

Java: // 手写递归
来源：http://www.xuanzx.com/163dxgwnurf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163cbseuuvf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163avcgjrwg.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zgrfqwsw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163lthticdm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163woibcmjy.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163rockecyk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ajxxplut.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bnmazgzv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ylbiurbi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hvclwrca.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163cntbbvxf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163imdmdtma.html

================================================================================
来源：http://www.xuanzx.com/163fnbgnppu.html

O. 并发与异步
来源：http://www.xuanzx.com/163mbffyrkg.html

================================================================================
来源：http://www.aibaodan.cn/163ozqnimpz.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163hyecewqz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163qxwhkisa.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163dcdhcwyp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jvtwugwf.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bdcualrg.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163blghvayw.html

Go:   go f()
来源：http://www.xuanzx.com/163oomnvjhb.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163rgodullx.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163yckjwjed.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163zhtmkzma.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163jfygukpf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163wtlmtgfk.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jghabryz.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pydbnkck.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163yqtlkvei.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ozbdfklo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163eyzotcnx.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163koeuqbjp.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163lfwyfzrm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163zxbpzdey.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163zgkbmqwh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163istqzvgi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rdlkxlib.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163dmucmxtt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163wysqsxqr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163tcnkafmg.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163cdndyfpc.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163jrttvmou.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163bygfypkj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163pqipfpwh.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163zcmnmitf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yclaysoa.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163mmhmhfxs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163kopaetrk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jnjzgtjk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163olyczcbb.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ntqkgwcx.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163oozumaiv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163cxtdxkzd.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kpjrrvmh.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163epntsovu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163cweckoot.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ufktwoik.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gpjrkhoq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163pyeuhxlt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ducqryxz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163rfnybcin.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ywsdnnev.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fpzobvdw.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163uprgrixo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163sfjttspn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ppnudvml.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163iymrviee.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qdyqybjx.html

================================================================================
来源：http://www.sxryk.cn/163ulmgpmlb.html

P. 常用工具函数
来源：http://www.sxryk.cn/163gsrjfwnw.html

================================================================================
来源：http://www.xuanzx.com/163aheipuzf.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163kddzwvgy.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163othkvjog.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163apdaixhc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ijsjowwp.html


<!-- 参考信息 -->