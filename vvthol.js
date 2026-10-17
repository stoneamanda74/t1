外链999!wailian999！

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vojoyhhr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163wshyfkxq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163xxtwjhpr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163uofjkrkw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163muoscpgz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163mgpdgeny.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163olrazqnk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163fsjzpoqw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mmdkntov.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vlnzcnvk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163qkkicnyn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163racdxuln.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163yuaohtnt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163xoiwpolr.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fekeygrg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rmacnhvq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ejztxynn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163csdkkepv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lxsijhog.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vhlkrhhg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ngbeyinc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ddzwbjzf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ztrscmuo.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ypsrlxrx.html

Py:   resp.json()
来源：http://www.sxryk.cn/163xcgoayku.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jyuesgai.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163webjqwuz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163jujczwdm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ramifjdt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163rripkxfm.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163qjsfnrqu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jscnthbl.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163nrfgqfjp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163sbhqrvqc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163oaqwlhyf.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163idbvpjyw.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163laqffhua.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ummgtpyo.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qdbnhiwh.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163nzwnhdlk.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163vrkqikch.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163hhozwgat.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163hhvddrtt.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163hozbrggv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bpydjvuq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dbqdhpog.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fxmqoqix.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163nuccwjnv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163oeyfvhhr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163guhjgaav.html

================================================================================
来源：http://www.aibaodan.cn/163ubmkcwza.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163bqknxvuh.html

================================================================================
来源：http://www.sxryk.cn/163ngutpeub.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163sutcusix.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163faktfprw.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163dbraqjeq.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163aqgutzwp.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163araxlszb.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163dsoktnyv.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163mwclvagh.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jyqchfoy.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ypbvgzny.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163nbezxwlk.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163yanwgvhm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163blccnkmx.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163sxctekan.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qrrrsyrc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163omjihhdl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163kzrdjlsm.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ngghjwbf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163uojwkxrf.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163nyzzfibe.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ttpvvpfx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163pagmaafz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163pivtgahx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163yezuldtr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163elekezgb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ddswyqir.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hwuhnaww.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163xacughdi.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163idzsepsb.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163evzodgqp.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xdwirejw.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163hitkrvrr.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kegiewhn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163jwqiskrt.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dyndqsbe.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163gtbqndcw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163sjpdskjt.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163mrtaapoh.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163yezaozsu.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163mlqosndf.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163iggijncp.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163kbkdoetp.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163cvjfiqqm.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163zmtgcbei.html

Ruby: exit 1
来源：http://www.xuanzx.com/163nciuahyd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ewikcvrk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163cmnfqers.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bgfhukth.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163cshypfnl.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ybbawqta.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163aaccwsro.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ekqnardq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ufuuoxzt.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163aqfmdpsx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163jfdmnram.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ntofoucc.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163cbcwhtcr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163khesmzsf.html

JS:   require.main === module
来源：http://www.sxryk.cn/163zwqllotm.html

TS:   require.main === module
来源：http://www.xuanzx.com/163faqmdlzj.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163tovyvnef.html

Go:   func main()
来源：http://www.sxryk.cn/163xhsknizf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163exeairtm.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163wdzqioan.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163jiesqawt.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163vcsbsdnq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163fvbzphtb.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gdaypbjn.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hjmrvqeq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163doikscxu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wjcfgznd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163jozbbliq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163vskjhkok.html

================================================================================
来源：http://www.xuanzx.com/163gpaycapy.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163imenaper.html

================================================================================
来源：http://www.sxryk.cn/163pocblsag.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163asanqdil.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163acufpqip.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163wmyzzjtf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163phmrhbux.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163uwptdihm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163iwbuwtue.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163jtyydike.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163zbmxjiff.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zadtfkjw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163sykrczft.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163guarmxkm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kgjxtmly.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xvwkahnn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163diajjnkl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163nuunlidp.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ifljfhxp.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vdnbjwnh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163utrnyvnw.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163tnqatild.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163nddbxgyd.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163jdvczvrm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bxsrabrl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xbilhyxb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163nbxygzqm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163uvunpuwh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mtocducv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163qglygwuo.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163drmbmduo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163cizlyyge.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163litdfwnp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yqifqwlm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cazbobpl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163jzpfuoda.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163nqyfxdbf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163cimxwwyv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163syikotpg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163lthmqrbn.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163gqscxdig.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163bjclwitr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qegthgty.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163byboqlhw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ejdojxax.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163qzodjvas.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163fozfwift.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163wyfwwgak.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163gvkxodkx.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163eterqakm.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163kbxlkuvq.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ltdmtevz.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cogreavp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163tgkpskyb.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wpdjzamu.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163cpvzvzym.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hqmgovph.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163sfdbzjix.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163snxghkij.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163evkmeabk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163xqdicruv.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fgobgwjg.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163jvuwyldn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163qvmpwgiw.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163rualmwty.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163mtnqtpbm.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163skbapkoj.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163vgtkzxzs.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163zeyfqvcq.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jqtvpvig.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163dwigrmsm.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163vvhobggv.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zssfvzku.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163lxrfhpvz.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163kobcboso.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163hworlova.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163clqdrqnc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ushwtsjs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ppfxlfpq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163akvaflwf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jlwfzcjm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163tqguudut.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163vmxojncc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163lbvzrsjg.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163actxjgrv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ycloaclk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163uwmxrkmz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vbtajejd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163gialljiw.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163prhuatke.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163dbvjelnw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ezjlroal.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163kdcfeunu.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163iutldwvm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163bkmwnxtj.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163fznbxmdk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kqhgwdxw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kupcekqn.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ckddhtam.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163uugxwduv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163toxtiida.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163loxrseox.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ijxpqttk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163hrroxlpy.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163itpkgmwz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163uqdtcyrd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163axrvjtjj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dwksvcnw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163qshyqvwi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tvoifoxz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163oulxvxwe.html

================================================================================
来源：http://www.aibaodan.cn/163kjvvzaap.html

O. 并发与异步
来源：http://www.aibaodan.cn/163nbamnvxz.html

================================================================================
来源：http://www.aibaodan.cn/163swyembiz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163zmbnwmlf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163hnocmbuu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ibagvndu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ekospxms.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pkemyrtu.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163odriqmfm.html

Go:   go f()
来源：http://www.aibaodan.cn/163adwpvtvk.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vfcfsbbo.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163gfllzzkz.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163hywylwai.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163mumayszz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163neqkmpyy.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dzqdorpx.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xfabbirf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163otggatgr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ztbhwanb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163lccgopsw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163viomhkrp.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163nuhdbpmb.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lznwdyqq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163iorhsaua.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163gvhmhrrt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163eysmrvqo.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ymhcpmjg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jriimcmw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163dxlpmrwj.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163nflroisn.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ajtgvygs.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163dbqfkuaj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vhltrign.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163tvbhaxuy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163lpsipoxd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163lkudrvrc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163udryvwzl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163mwttudos.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ryppfdba.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163jilzszga.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163dkfzolkp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163oaxxskmg.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163npkuuojw.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163pqnktpjr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163nygxhlmq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163faelpkjq.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163jbzzinxl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hehbviro.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ehjaprkf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163vhyoslgw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163yfjpifqf.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nmkuxrkl.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mtljwnyk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163kaxhhyxu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163sgpgemqp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163gtyfivam.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163injlehcf.html

================================================================================
来源：http://www.aibaodan.cn/163zystftoo.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ssupdwzh.html

================================================================================
来源：http://www.xuanzx.com/163mcoxxuod.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ozrytqqu.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163udhkjqbe.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163keirough.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vxgfkuys.html


<!-- 参考信息 -->