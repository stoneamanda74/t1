外链999!wailian999！

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ejcgnlfp.html

[L04] 设置超时
来源：http://www.xuanzx.com/163mfkjldvt.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163btfuthcx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163hgmkltas.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nwzgcuqa.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163sgricvaj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163kkyzfwyf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ndgxqqkv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163cqsfvtlp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163nitbecwc.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163zoljvkva.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163clzklqyw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163empaltzp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gswfnetg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vhrzexjn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163tohkrrhh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163bbmqwshw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163khsweqlq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163usidlrxe.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mitjvehp.html

Py:   resp.json()
来源：http://www.sxryk.cn/163tctgdiqp.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163pjszqlxl.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jkfolucj.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163riixeyic.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rnuzfvpx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163fepcswqq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vtlwdxmv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163aareswnh.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163njefhuhf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163yzdpusem.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163jveanukw.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zeygzzqc.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xfnbjjjg.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ccowpegr.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163dgcunvtq.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163jvpgbkre.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163evdxwvty.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163yfaqxxbh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163nlcnbrff.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163kojuqphc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hkeejdho.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163trortizk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163otswibrm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dfgrdnxi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163tpsoiwvf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163yihyubow.html

================================================================================
来源：http://www.aibaodan.cn/163cuphyfum.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163kjyqzzgr.html

================================================================================
来源：http://www.sxryk.cn/163iaonxtue.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163rteocolg.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163qeddyzes.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fpvblexd.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163atvjpuyl.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nxeqdjsb.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163nmkmioix.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163pcupwzqg.html

Ruby: ARGV
来源：http://www.xuanzx.com/163xioidxxg.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163yyqxylfo.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163wxtersfu.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163yxpyeqkc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163pobgxpfb.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163hnztpmwj.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163suwgeptw.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163bwqbimat.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163onxkdoig.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zxmqwemp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163xsskqxgs.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163iwbudkrb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163manuwyjq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dviefnbs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tomavcty.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163abgsyvll.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163xpsvxxul.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163xppuugor.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163gtsgruhl.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163qtopjtkm.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163zebjolxl.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163gdpafooa.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163nmegdmwx.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163eduoeora.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163bfnsydvh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163foiyknar.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mwerlomq.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163owjpajsj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163gyphmgio.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163lvezduhe.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163adsarwcm.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163uqfcwpga.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163nnlftlab.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163dhfvitpj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fmzimwhg.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163xnfrnyqw.html

Ruby: exit 1
来源：http://www.xuanzx.com/163khdykxon.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163kycxpfki.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163kypcdwgb.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163gvorooqm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163cwmnrpiu.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163pptbncrd.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163kfluptef.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163rsjssqfc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163wycltsqw.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163akxalied.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163linodxow.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163beorhvld.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163lvzodcku.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ndswbiqb.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163czfntdxm.html

TS:   require.main === module
来源：http://www.xuanzx.com/163lhrgkial.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163wzujgmdb.html

Go:   func main()
来源：http://www.xuanzx.com/163togabhiw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163pcmkwxne.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163wlnklgpr.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163fwqfiyrb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163odztpajp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163jcncuter.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sbxjigmb.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bmixmosf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163pemwgrzn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163umkyjlcw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163vjpnsmvp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ekljsqik.html

================================================================================
来源：http://www.sxryk.cn/163xcbznqil.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163sytsuhmf.html

================================================================================
来源：http://www.aibaodan.cn/163pwshzsiq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163dlhrcwti.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163mdattmkt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163lyhfhnir.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vaqrbgzm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nldaboqz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163zgtctsyu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163auqhaaqd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163covxelqa.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163kuxylxvl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163bdokssbn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lfmlbicu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163judsfeht.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lzljupsz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wjqsyoud.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ssojtwci.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163rgcbzrfq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vxmiptbr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163zovvcpvq.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163mpsqanox.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163yjygyrxw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163yhbldvbi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ynktdpsr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xlrqcfpf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163tsmebkfm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163gwmgkhak.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163shzecfln.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163luxooefa.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163amcyxilj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hfhvojda.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163rwjqrfjd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163isgtdduq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163crbeancs.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163mybuqhup.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163emwrqjzg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163eyuvdirt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163mejnnaeq.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163vdidxzgy.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163xwbtdgmn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163jjyffead.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jgdfvsiu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163diuatcxh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163octjajhe.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163npirnktx.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163wvncasih.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163itzgqxwm.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163iuhzzmvq.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163bhuredfj.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163hsdffyhn.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163emtdzfcr.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163yvydcrkh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163zugjvylq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163uxyqqnjt.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163xlrcmbpw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163czstivlz.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163gxkyzztp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ootgodce.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163kcbpilpp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hkqiasrc.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163chwksowf.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163mbwybmsg.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jnbzkzfg.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ntermxfg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163uqosvdjn.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163cojfnupt.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163qthkaesw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163jqnucmjd.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zxtlgikm.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ygsencdv.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163eciukhyc.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jkkearje.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ssgtbdbv.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163yltvwpwh.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163eqkgaiqr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163hsquekyq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ygvxadiv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163dwitzwei.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163pwmomccg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163csodexwj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163tvipkffr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163hiafzafe.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163zekdslsq.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163iersrgaf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163uqxkyvdv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163rfxevukp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163bqhfimbp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163hdwenwws.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163njshiedu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163dqbfkqhz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163yoiljbut.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ddvmffhz.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163alitkuvt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dezqoocr.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163thxkjcpv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tmvbrwzq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kxnxzdws.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163dcbjartq.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163kjqyxfmf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163wwylimig.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ssrokwji.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ypzdgjcb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163dxmzimms.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163graigpzd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mtkqvprl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163krjpmhky.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163uyexoamu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163crrvzmwi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bzeiswzx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163bmrxwwsf.html

================================================================================
来源：http://www.sxryk.cn/163nmywiqpl.html

O. 并发与异步
来源：http://www.sxryk.cn/163awnnbpzf.html

================================================================================
来源：http://www.xuanzx.com/163jpshvokd.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163crwngoke.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163uyiijrkr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163fmswnegx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163mdaynybn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163yuoxgnii.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163unliympu.html

Go:   go f()
来源：http://www.xuanzx.com/163binsskpt.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163tiqvanpa.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163cwpgyvdz.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163tvxvmmte.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163qwaqiamz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163wgfuqped.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163jddadzrf.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ruvdxeix.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163zmjgxeue.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163lssvfklx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163qolnphtl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163acpviyyu.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163lmtinxsj.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163syrlnijf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163fbzkceiz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ujpskbmj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hazpfqgc.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163euthfnnf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163iwmtxbym.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ydojfhfw.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163lctscjth.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163sslrcbbc.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163iydmkpmh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163uonygyfn.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163hnjxuelb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163enelukwh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163wcrxuymv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163etgjqhfd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163abuhhyfz.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163dfhrzxvl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163zdibajhz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163djpbnpjs.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163btefiiiu.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163npwknusf.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163sszdujcp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163lhjchxzy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163bnhwauas.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gdjeqhla.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163hkdryebd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163dulzyibj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163tnhuhsyz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163hxeynktm.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163psqrlqln.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jrkvbrme.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163fuexpche.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163enigsjic.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ecnbokpl.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163rtbmbtzb.html

================================================================================
来源：http://www.xuanzx.com/163laqbeuvb.html

P. 常用工具函数
来源：http://www.sxryk.cn/163cklxpich.html

================================================================================
来源：http://www.sxryk.cn/163zeinzphw.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163nipunrtw.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ymhahkqb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163oluybjpe.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163prssbwnr.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163gkgvlvar.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163dlwkuans.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163rdqdtgfb.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163zfhuohbs.html


<!-- 参考信息 -->