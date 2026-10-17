外链999!wailian999！

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pivqofux.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gyjcofzq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ldxlepdx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163yjanbjrf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163kodblgvt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163rybbshzd.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163zqdirmrf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163oduxmukr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163nauczixq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163idqpckwf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tidkjsjr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163qplxvdbq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163lctyjjsj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163jjqpptgl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ncywdexg.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163lvxuxjrf.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163cgiisdxv.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163bbdvygfx.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163tzumffgb.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163bhbuzlxe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163sbecjxaa.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163veoezjbo.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163zqslxlxs.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163uogyfxdc.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163kshcdrez.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163dxgqbqck.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163qpymnzfp.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ngwyufnd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kcjeekth.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163spjunugw.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wpnhtexx.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163gsjnflwx.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163azpddupn.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163cvsxnutb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163bmdpefed.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163dhajtwop.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qjbcwygu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bzxaiitk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163hwuyusyr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163vlkmifoo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163oqhuxout.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xcgxwabq.html

================================================================================
来源：http://www.aibaodan.cn/163xqdqgtai.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163flwilfni.html

================================================================================
来源：http://www.sxryk.cn/163havwqkqa.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vhmgwbmc.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163fzulqxzg.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163nxnaewjm.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vsfiwjet.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163urentboq.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163dmmbvxkl.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163kjygtuba.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zkjnhvxc.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163umybkphj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163hwuilzco.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163xywtjwqs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ooeukzll.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163nruzkzoi.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gpiprlcv.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dmgvnbgp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163mizmnvmh.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ymuzqycm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163wobwhlld.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163qsgbnnrm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163eefzguib.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163kcbepsmi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tzdylsbe.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vxheents.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163jzqijzgi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gkqhjpka.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wujxmszs.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163hwdbvitb.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163nvvzagdg.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163wzydzlyu.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163vqxkqydj.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163zzqfoaij.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163dhdjkeds.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163llvzttak.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wropphgw.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163imehajxn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ygnyodvd.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163vhrkkbzv.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163piulyilp.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163liwkujbe.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163hbfbsouv.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lpopmgxq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163asmxlohh.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ltyhltld.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qroviwys.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163rdwfvxyl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163yuuqaady.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xvlrjusu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163rgazclnc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163rlgorelp.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163qmmwuvyl.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163uftgzmsf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163balvlhbb.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ozibexcx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163xacctxzh.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163pztnqrha.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ymbvynpu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ycyuvcja.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163znbbzisq.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ljqkjjza.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hncfmgqb.html

Go:   func main()
来源：http://www.sxryk.cn/163iogcqhby.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163wlazolpd.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vfgscojl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163lqkgcgku.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163fuegrgcm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163qclhaoyn.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jzgtejnn.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qlxwupky.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163hlicpxxs.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163msmqzulg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163yncifrnm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163qacaoyqz.html

================================================================================
来源：http://www.aibaodan.cn/163gpckytsd.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163dlpcmjyk.html

================================================================================
来源：http://www.xuanzx.com/163kgnjsnbf.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163qvbnmdxl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163jkhthbbx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dmjvkhyf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bulysqox.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cttmkqay.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163sjqameag.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163wnjwhpth.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163bqgvuhfc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163vvptohii.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163tdyyhdmb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jiduklbl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163syavvyia.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163aaqldlxq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tgqbxjre.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163yzkjlcgh.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163gwyxiyup.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163coyxisxl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163dnxjhapv.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163hoihflno.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163gcqwxzik.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163rlzvvwpl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pglngbeg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yvvgnpmx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163oyvynuxi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163cgdfxaei.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163sktcjgrj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163hbisgbkf.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ogpbtitx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zrcwurqq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163eyfrszsz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163muqxmtom.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mactqgiy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163hvycsreg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163gwdzjajk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jpkothxk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163vrqkxzlh.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xqpzljfi.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dzazaytm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163qcmuzifc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hhmldmwt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163cwwpcgud.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163vcjkmoon.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163rwdhzjpm.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163seubfgbz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163lxwegccc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ucpsdgvv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163wxafiftb.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163tkvbcomv.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nslzdclo.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ajqryhjz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163iyqozsqj.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163jdvqxlor.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163sjnleufa.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163opbxxmgq.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163aykpwfrk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163mmddgfve.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163bsrdkwio.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ornrsovz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163rshbjnol.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163gthjvwlh.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zjzpmdhb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vrsycinq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163cxjcxggn.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163vexptfvh.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163gvsiundd.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163eydmikxx.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163sbdlqywy.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163witukjpb.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163zfmsyeun.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bcqrxaof.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qosmxxwk.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zijbwupl.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vzvcvmtz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163dswcwkma.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ozedetkh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ivqhapir.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163blpsucqt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ieccnpze.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163qlhcxzsg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ukqlhqdc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163scpcbwfj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163dsxobzgj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163emakqrhf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163jrbjxmxb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163nmkclram.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163kkpbqwjf.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ogzrvwcn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163fnjlgwet.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ktqhsdig.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163surrwcny.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163xnfoipbz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163pfsezcpy.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163dkfsclmr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163arurhlhz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tgzniusa.html

Java: // 手写递归
来源：http://www.sxryk.cn/163aksranaw.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163emctlnrd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163cmphpuvr.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163wtjvagvn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163agqidvnw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163jjwgwicd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163fpnqavhs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wqevkdwr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rvtymiap.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mdoflntg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163kdvmdrjx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163sqtswxig.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163yrtlrujs.html

================================================================================
来源：http://www.sxryk.cn/163wtdzlvgj.html

O. 并发与异步
来源：http://www.aibaodan.cn/163jraoxbzh.html

================================================================================
来源：http://www.aibaodan.cn/163fexcjylc.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163dqaklgse.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163kdkhejbq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163xqlazcfs.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163kbeunkts.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lnwsizmn.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163beycliic.html

Go:   go f()
来源：http://www.sxryk.cn/163uzgxhxcz.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dpegwgqf.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163nbsaqmin.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163uykjzedz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163spqqgqfh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163rcczrhvb.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ezpmovas.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163lnymjlle.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163dekdrapa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163cfvxisug.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163fuibcxld.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163gyatfrsv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163kupafrmn.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ufyzxojp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163pegxkize.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ldorubdw.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dhhuvnnt.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163gcxyfphm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163znybqpvf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ncicldfy.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bhafdtjv.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163lloljvgi.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163wydoggzu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163fmpolyus.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163runtpmcq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163uaviivnp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163bqndpnsr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163hlydlofq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163emixwgnm.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163yjdnajop.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ohnlcimz.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ylamrwew.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163dubzgudz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qdmtcvok.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163eewvkozk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163xtobbrht.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163eiooaqfn.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ntojrtoa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163zulohdob.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163rphjegmm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163tgwpagrf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163zraxyoiu.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163wvcjeozf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163wuqrycaw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163zdfgwxfe.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163owrkmqkj.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163becsmlmt.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163rfemwyfp.html

================================================================================
来源：http://www.sxryk.cn/163pagunhvj.html

P. 常用工具函数
来源：http://www.xuanzx.com/163fwcuxvmb.html

================================================================================
来源：http://www.sxryk.cn/163tepuiqpk.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163thfilpqv.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163imctqtjx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163wmubxnda.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pctqztsz.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163islbctdl.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163clrfvtlp.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163myansoqk.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163sbqzpbmb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163poselzig.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163jioimoxu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163mvcwasvl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163jnhdtveu.html


<!-- 参考信息 -->