外链999!wailian999！

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mhijmedn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ngfzktyl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163bjqbwobf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163gdkslcae.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163plsneqvm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163aadeirds.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163kkaidxgx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ltblmfqd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rehoabuf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163izfxubry.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fomldzet.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163gjfpmmaf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jfshisvx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ewmzweaj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jdcgeaga.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163bzistrps.html

Py:   resp.json()
来源：http://www.xuanzx.com/163wqbfimdu.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163rzzqexty.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163uzfirauz.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163yazwcedd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163yplosjsz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163scqqifer.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163oxhgfroc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163lcfegiol.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lzyzqngv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qdysahik.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ahboklvx.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163uiupgsql.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tmxryrkf.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163osvddzzl.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mtxvsqnw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163fgxwxuto.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163svqnnpqp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qofkcxoe.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163kumyqkkw.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163leyzrpcy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zifvyuph.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gyprqqce.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163bdoeqsdb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163akimvxcr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163nsneckar.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163fdyheeus.html

================================================================================
来源：http://www.xuanzx.com/163rubcawjw.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nwltfmwl.html

================================================================================
来源：http://www.aibaodan.cn/163qtdrefmv.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163awmjhizn.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163fxodqxxy.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163wankteyh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lclgnexp.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dwlminfd.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jtgwcxbx.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163kxojjstw.html

Ruby: ARGV
来源：http://www.xuanzx.com/163satguhrg.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163hoskslkv.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163rveqvran.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163gvvprkzy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wyxswvem.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163sbffvfbj.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163wlknsjdq.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163gbfdjsrc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163uiqdgpfy.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fozrcasg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163zwkohted.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163uplwrgwa.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jempzbxk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163qzrrggve.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wsvrarre.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ewfuidtz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163dyupwmaf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163adysfjvg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163piquakaj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zlbgrrxn.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163zsqgwyhc.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163qxhxoehg.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hcmnxjay.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163cldapswu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zkbxaroc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ndxanvxr.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ycvwudgl.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163gvdokrgz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163yopycicc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zmvbcvlt.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qhopipqm.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163tlonejtl.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163vmddpqmg.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163jsarceol.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ssaublmw.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163kyrtvyqe.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ytpoahju.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163zwvggnxc.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wyjaucna.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fwqlzpng.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ptbafcwt.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jbvtsmhv.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ardmkomx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163clcrarve.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163isjdnzmg.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163mnyvpbzg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163uljedjgs.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163sgccncli.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163bzdnkigw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ljimpzev.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163urxaagst.html

TS:   require.main === module
来源：http://www.sxryk.cn/163bnhtltsn.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hldwbdcq.html

Go:   func main()
来源：http://www.xuanzx.com/163yhzxhtyr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163qkjnmpeu.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163zujdlfzv.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wqfjhuyw.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fwpnpmsd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163apzksxnl.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163huzsctoe.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nvdzjusp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163nfzhiybj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kupqyyyw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163rezoomlo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163yokpsvwm.html

================================================================================
来源：http://www.sxryk.cn/163wsksrcbu.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163icvwxcwm.html

================================================================================
来源：http://www.xuanzx.com/163nnrppmhp.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163jdumssyv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xnqiichf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163glqsqbfn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qrwiofma.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wuszwxdo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163esdwclke.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hfzqegpy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163lfuxwpqt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163lpgtmcxj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163bmvoxcya.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vciijwtw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163jkilyueo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bdbdgkws.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tddxkcbl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163hkfwozck.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ldfilmxu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163esdzwfme.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zgffwaql.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163vkimwzav.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163csqxnjqx.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163zvsypaqg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163epuyhpel.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qpzrrljg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163bdptiika.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163qiygnplh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163fkkjmrdo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163wtttqgfm.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qcwpzkyx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163depuikbj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163zitlvmiv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163avulorpp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cuoocucy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163yeldspyr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ntckuuiy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163llpulbep.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163nkmqfogc.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163wsoesqmb.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163urwmbnkd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zkccgomw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163erklmbua.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mpfxvewz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tzdarlhd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163nfzmykrq.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163dtranrod.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163wbdurxpi.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163wiozjmkl.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163nxymwixw.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bamadwja.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163eabuhnak.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dryarnci.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163xtqgogmc.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163dxonaolt.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163cgtrqrdy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ivwhmwjv.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163cfiejbzd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163mdbtjdes.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163jjymflln.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163kwxpxjdt.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163wryxzzzb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163kalttmnk.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163mhyngfib.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163hlxkkbhu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163cwjbbrxw.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163dqdqgopd.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163obwjdegi.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163mwefeujq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uubgabhk.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ugqemulm.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163mohsnygw.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163pzvhrrln.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qfdbtpol.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163cxvqkyyp.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163osngpugx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163oisbkykt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163nhtayxbx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ldfkjrfq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163zvhgwchf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jolyguuh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ugkaoktn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163agrceyem.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ethwdmgr.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163hjtlufah.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163frhfzupq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163kxuoyphc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163hybefugb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163gjvonkcp.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163hetthljf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163fnxtdoyb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163escbalwb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163zajhhoiz.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163aotexjoe.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ufnfvyim.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ehsxzrjr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gsookqdn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gjcxbzna.html

Java: // 手写递归
来源：http://www.xuanzx.com/163fomsyvxv.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163rhirgqso.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163xobudbmw.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163chholfrx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ndxscusk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163kpeymnns.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163rkepcszr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mtaatbqs.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163yzukqlfy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ndeocrfm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163wuiddqtt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ffvicxnv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163eabppjpv.html

================================================================================
来源：http://www.xuanzx.com/163muxqoncg.html

O. 并发与异步
来源：http://www.aibaodan.cn/163njmlikai.html

================================================================================
来源：http://www.sxryk.cn/163zhrhfmwq.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163kdxvsmvk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163lggjmfkz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163nkahlvhn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163pvbhkrsm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ozrqyugk.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163nzctsrsj.html

Go:   go f()
来源：http://www.xuanzx.com/163tmkmtcrl.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ncmpdcup.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163zsmcptau.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163uaucgkcw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163pmduzwue.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163dtkjwqrk.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163prugfgyf.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hlscczrc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163kzvrtbvr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hoajgmzk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ijandyqh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163hlekjgng.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ibdnpqmg.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163dsgdrgbq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163tynegnqg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163oktwhfql.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163asmepokz.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163xvrutajh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163sfxpdmji.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163kofylmpi.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163xilpgvdu.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163omnzrelk.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163yhhuzsqj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163yzdldczk.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163avshznub.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163labkpzky.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163rgpvweuv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163fepkcpvn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163cytbkwvo.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163xydjclzg.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163tpoghlkp.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163eecnlsys.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163jfyoxkbj.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163roxsqhcg.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uspoghuh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163pgduidvd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wwrufuys.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163mvyqsbqj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163sucgqcvk.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163arpcvmng.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ztvppxcn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163bnvticpk.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163tujrxxjm.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163mpstppdc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163kndrihhq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ykkrofhg.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zboqpwnb.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163lbwkjped.html

================================================================================
来源：http://www.xuanzx.com/163egdtvqdm.html

P. 常用工具函数
来源：http://www.xuanzx.com/163qmuvbrte.html

================================================================================
来源：http://www.sxryk.cn/163otlozsjs.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163xmwenftl.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163onzhnylw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163pgrhtkvn.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mmglpbmq.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163cyuxhtkv.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163hlomgjrz.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qwmzbrcn.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163uzjojqsi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163jhzhhclt.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163zbrelxyr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163pjnouijp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163xkoiccit.html


<!-- 参考信息 -->