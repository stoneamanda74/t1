外链999!wailian999！

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ggbmfozi.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jdqkfnki.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ektzitwo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163xikngfle.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zeshiadx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vhbtwadi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ukavucnp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163zvwotljb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163iirwycxy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ffjabphp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163glksulak.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163vuglysii.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163vxviduvk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163imgqwwez.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163mqfeivfh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163yzzndxdr.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163nvfmafun.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163keqwxhmf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qfupaglg.html

================================================================================
来源：http://www.xuanzx.com/163aujstvnw.html

L. 网络请求
来源：http://www.sxryk.cn/163jlhjcwfb.html

================================================================================
来源：http://www.aibaodan.cn/163ryknkwwl.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zvrnzzur.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163siqjakqo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163btrxcslx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ujaluuyw.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163nafzwwxw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ogvjmrnj.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163yogocqfu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163mhzqkusr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163taptfsxe.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163daoxjydi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163alcfohkd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163nmepgqhi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uhrawtgm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gmburjqr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163eizztgxm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163fssofndx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ocmlkgbr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163vkujobdg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163jcueweaw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163fsyznonx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163hpejkzpt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163edmxzlrk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mkkgqubh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163eieseytz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163brmudyip.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163zkgopwrm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163dgfkoiux.html

[L04] 设置超时
来源：http://www.xuanzx.com/163bezwzgmx.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rxovxjok.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ubfclnqu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163chidliko.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cumalmna.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ejrxcjvu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163vxjvvtzv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163qnjoihbw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163zxozsddh.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163yeayirwf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163psrewyne.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163oxuoghna.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kywspthu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vitxiump.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163bqnjaylj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163gtkhlleh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ihpbqmwp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163saxkujnv.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163fadfvhfd.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163kogtworl.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hhpfiugg.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163foxnpfbr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163dyiyrffe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xhputiwq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163mngxpmug.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163flcwqroy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ejuznkjk.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163kqroachm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163pcitwnpq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163mxihfjee.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xsmtuxgp.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xfddgtof.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xeqyryqx.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163dfllzlsu.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163eqbfgfoe.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163czebtepr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163euvnlpgp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163utvriezg.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vbpducdx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kwjkzvmg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qryjpvhl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ssqywxvs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163pyeesoik.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163fdeirwbo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163zlloeckm.html

================================================================================
来源：http://www.aibaodan.cn/163icfkhbyb.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163twncqddo.html

================================================================================
来源：http://www.sxryk.cn/163iewnhuso.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ykiaaqer.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163aheqilxd.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163pydakbmc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sfgkghtq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163euuwcvsh.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163qcjudpqm.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ooyrvedk.html

Ruby: ARGV
来源：http://www.sxryk.cn/163kzzdxkmy.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163xnjghxvs.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163nvyfgocm.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163kmxgnmfc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ghqcdipo.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163cnkavlfg.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163hkmslsfp.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ncxzfmnh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xsjnicwq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163luzbwtrm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dalzhzdq.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163pskvhtnj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fdjxhesf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163arfaovae.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hdfruvwo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yrintkva.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dcpjjpxz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163cvjwqzqp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hbzhfgtk.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qyrbeipu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163jofekcrm.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163vadditns.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163fyzdzogu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163gspxfpro.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ppzsxkoc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163oeguuunw.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163wozkymcb.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163gqesfole.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163bvvoftzy.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163roawdead.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163mhjmvxas.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163qyukybnf.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163fxbtzdzc.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163logutpby.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ovaydzcb.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163sffvcluq.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163talnjstn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163hcpeysik.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163dboeoqyg.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zkjnggfo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ouqiuevs.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163chejbmfn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ccxhjrjf.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163gpeykavq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163rkdnmykv.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ektkpgug.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163prffzcnh.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163bonnfbce.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163gadvifhb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163cticofuz.html

JS:   require.main === module
来源：http://www.sxryk.cn/163rmlrphsg.html

TS:   require.main === module
来源：http://www.sxryk.cn/163plmulezr.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163wosoeazk.html

Go:   func main()
来源：http://www.sxryk.cn/163yrwwyboj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163mkufzuvt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ssffyrjs.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163oirolqmo.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163idizefdz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163xofknwkn.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163oklejuzh.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163muqqjytr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163iudgramd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163fklxnlyd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163hoxlmeby.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163mlsmoezf.html

================================================================================
来源：http://www.aibaodan.cn/163fjvzxjtf.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163xudlrqdu.html

================================================================================
来源：http://www.xuanzx.com/163pmwwdgzb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rhbfjfxz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163cmlmodep.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rcgixfgf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qtvekfue.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vkhvraeu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163pbmpxtfg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163mbvqgndu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163qxdahrqw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163pwpkrxbg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163boarditz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163syunymyh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ejumbntz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wpyqiwxu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cdzufyie.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ndybbbpw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163etwxnoah.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kwpxsjrw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163stvslsvy.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163vauwoiwn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ydcqokuj.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163lmruvahh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ipfzfayn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fmtemxqk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163esdasygo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163lktdhefx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163pvqsyuex.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163uojcesvs.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163wupogimg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gqwmuixc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163kxfjzlgg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qyjxfsne.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wxdqdykx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163cboqwgmq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163addfwyht.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ccgyyemb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163bsgqldod.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ymsefnev.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tkxuavht.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ljwocier.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wtxkxyjj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fxlhspus.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163encgckns.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ifgtwjls.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163jptwnvih.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163vdmiyfyr.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163eshzniii.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ooalfpfz.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163dbrlidkz.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ynenuuyl.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nyhdhiba.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163nwpyteol.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163uajmslvo.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163lgajtfbr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163roqfboay.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rgtxtfdk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163rebpaxze.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163radlxksl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163qvdetoio.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163qcpzldwx.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ukittyir.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163molbjjos.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163vpiitnlb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ifvtcaha.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163bykzwtcy.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163kidixohy.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163lcrweidf.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ajfhxrck.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oncpgyum.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163rnfkomay.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163slxslsvu.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163oqxrrcag.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kwekpcvc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163iceumnly.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163hnwwbwul.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163exnglimn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163vggnoalg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163brqzhkfh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163qxrgfzdl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163uyyxlmrt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163zcofjqtx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jvipdxfk.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163dzxbisua.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163yfgxhykv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163brakbotd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163thlpxchl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163nlfykzrm.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163rvlqtsuk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ccpycgcx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163hwdspgac.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163eytmfjnn.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163occmiezl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163aalqxaxk.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163tdboowiw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wpeysswi.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zydmkfjx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163phouudoj.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163rzaxmycw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163zfbputdc.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163njozpmlg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ossntngk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163afudspxt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ywwkwhop.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163wbedufwl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rwhujgvg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ntvffxgx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163mcjsxtth.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163zbaopgoo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rjaoeftl.html

================================================================================
来源：http://www.sxryk.cn/163vppnvany.html

O. 并发与异步
来源：http://www.xuanzx.com/163egcznbyl.html

================================================================================
来源：http://www.xuanzx.com/163kdfpbtdw.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163okliuuxm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163cwihheud.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ufxydglv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163sdynujls.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bzwkatiu.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ggmylxng.html

Go:   go f()
来源：http://www.aibaodan.cn/163cythejjb.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163zgavvmdq.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163qkhrzmon.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163lyfdoqqg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nirpdnsf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163xjzotvev.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mdcvorzk.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tapsqfej.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163xwozrdzb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163dgyihwbv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163wvfdgrou.html


<!-- 参考信息 -->