外链999!wailian999！

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163toaqmqfo.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163dmntsxvg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wjvizvuq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163iawhyggd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163scwsigkj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wnmmrlfz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163yoxjodru.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163qtyborxf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163oxrszstk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163swioihua.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163gkpghbsm.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163jotkjxbs.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163cjacfpga.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163whxxrrlg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gibsdarx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lyqhqsgm.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163inedtvii.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163msveciyh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163tqarowln.html

================================================================================
来源：http://www.aibaodan.cn/163eeabtqnl.html

L. 网络请求
来源：http://www.aibaodan.cn/163kkddtozl.html

================================================================================
来源：http://www.aibaodan.cn/163ooykbamo.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163csvjhfls.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163tqlodybl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kmqfsklf.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163semnqdis.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163bwgmwnil.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163baomidyf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163abqfsxev.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163kidadkmd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qiyqgjgd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ptwvwiyf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163shhtioig.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163qocesxgd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bogmqbfc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mjwrgdax.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163lyxxwcuy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163kywfhrdy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vjuwfywj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ucnnydgu.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163uvuotxql.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163nrtcmrfq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163spxwoidz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163owqnggcw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vigaxxko.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163xwzdlkpa.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163bbdpxvlo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163avqesvan.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163fpttwcww.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163nypqmcwc.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163umjcmyni.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dxdsokph.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nzkxexjw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qputugct.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163qskinfrx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163jgftyrdh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163zkppgojk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163qnmailce.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163mknkzgcm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163nvouhnda.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bwtuondk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jjuhkizl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163albzzeqw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163gibekgef.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163uvwlxdry.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163tosnnfpe.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jvgpipeq.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163oixjrpmm.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163bzxftlaf.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163gdprebnz.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163bewneuff.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163kfyuhpuv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163kvonkkpi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163mimihukf.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163jbeynqpi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bmwhiayh.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163unllugzh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163qgnyyjhj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163xsoaqtse.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163tlywtdgy.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jijmzlwd.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163brkcvrhb.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163gdjwimrn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wzgjzagm.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163dsfoexay.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163mguyzkyv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163dqxmpzyu.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163gntykoxj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pbjxqdgk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163osvzssee.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163wxtncila.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163choddrjc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163kcufugbg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gtmpfnqn.html

================================================================================
来源：http://www.xuanzx.com/163xxbwnojb.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163tgpfzuya.html

================================================================================
来源：http://www.sxryk.cn/163cqacruor.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163hkjnioay.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163gqnnanav.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163bbnknuco.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sdrosofx.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gnvvtufs.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163kitrqndh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163howgfqqf.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163spprdrts.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163zxtwxise.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ebbgostf.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163scjncbop.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ugsymeul.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ngidpuiq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163jzzvnfyg.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163rutdnbvq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163iztryvps.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ywcohwdh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163agddqpng.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163bjgptqgy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163gsahrslg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163nolvkxtt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hwrtrapn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zkxgtcbu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163jvzjgaox.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163rcpttsop.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163zwbqpahj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163wtdpwmep.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163rsgyorww.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xzlbmmlg.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163glthjajm.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163mrewgevq.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ceppmbrd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163zwdawtsd.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wrrxzqqu.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vfgqwuch.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ftpslnto.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163wczxgfwd.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163axqarwff.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ykixazsj.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ochjpgka.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163sobhbhvs.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163grzfdtce.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163eowzmcbf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163wxutkslw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ufvyyymw.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163zlwiynos.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xnzxgcdu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163xyfnouip.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163tfjajtme.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ifpheymd.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wnizrwub.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ppxwfqxx.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163kskoebis.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163toznufgj.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vrwjfldl.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hrusnyyj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163yewjtupu.html

JS:   require.main === module
来源：http://www.xuanzx.com/163outjiayp.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163jremcqrf.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163plumoiry.html

Go:   func main()
来源：http://www.xuanzx.com/163tbzcddtp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163aqmhlino.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163pienkrwc.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163iwfhnasp.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163yisrxugu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163vhzkzpkk.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ylgngkgj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kndlsovt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163gdrszbgp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163sqqgxygs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163fltoyurj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163dqctazyo.html

================================================================================
来源：http://www.aibaodan.cn/163uzqjztak.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163unwtsiqk.html

================================================================================
来源：http://www.xuanzx.com/163uoaibbpb.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163gvdgvhst.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163pxflyuyr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163xbqhytzw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cpmhisbp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163osatgvrm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ztctwqxu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163cgtsmmnj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vftzqchz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163frilwsco.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163uikzzdnl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163cczsnvvi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163vkvpczic.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163napkbvzd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163uknfstnd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163kfhwyyrz.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163xajqizch.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rqavodcp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163utlttest.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163yagrxmpr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163wgtlhfbd.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163nphtskdy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gcpornbj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jafagvav.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163svfceumr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163knojllqz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163deqmkaiq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163qcsuuugm.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ymneewzq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163isrcghvn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163naldzxso.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yrsvabdk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163eggrqjij.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163jgrzeorz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163uhignitl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ewityxvu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163yjkovvxs.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ilwexnfc.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163cgyakmeb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ylgmdfht.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vrcwqmjf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zyfrnptv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163fqblxcxi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163gpzfbzta.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163htvvcbtq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163fwjffmah.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163mycwvonh.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163dborrwxk.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163iqdpfnec.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163iwjyvwyx.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163koaljrci.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163cxfiapcx.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163uoohnnth.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163uyxrpbkw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ocvulzkk.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ldwyaxfz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163khsfzmnw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163irmaccsq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163nlrddckm.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ojtplcwt.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163syhfvhzf.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163yplpozid.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wxefxmgd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163zduwjinv.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163oalqlyod.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163auxsmdmr.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163xikmqlek.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rtprxgqv.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lbxscqeh.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163hmeuwkbd.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rympuqjo.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163lcfmcywj.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jbysaqbu.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ythjvxio.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163oolmqwzy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163lxasdyju.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163rvqgegwu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163pgetjmqr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163glsmxsfa.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163wewajzzi.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hokbdkvy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163glgkwken.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qyndcwkw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163bpujmree.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163padzxpgp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163anewzinf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163aiutaspu.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163qqyknqtx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163yaebovon.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zznayxne.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163khamtebu.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163risiwuvh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163tvjknaxl.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163xhphogsh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163cbvspvnh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xlhwgjlk.html

Java: // 手写递归
来源：http://www.xuanzx.com/163hmwqkelp.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163uufvmcww.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163tyxbwqqs.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163pdaewett.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163aypupiqa.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ttnvhusk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163mbbrdxic.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163gipjpgzx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163stmcssxr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163inoahnln.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163nalpxkbl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163wfikfvzz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hgnojnta.html

================================================================================
来源：http://www.sxryk.cn/163inzhkmtc.html

O. 并发与异步
来源：http://www.sxryk.cn/163xhpdzokx.html

================================================================================
来源：http://www.aibaodan.cn/163dxxvtrbf.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163rcicqwqj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ovxzstql.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163oasznxbn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163fqfmsoeo.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dcoikazv.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163iqhbwocm.html

Go:   go f()
来源：http://www.xuanzx.com/163tsvosjlw.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163kkddrdma.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163dtsbhxza.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163nzpdofgd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163nrmahnbo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163gpnkapbg.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xxouiamk.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163iqsidglh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163tgmtrnhg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163oblfzefi.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163vmlufqab.html


<!-- 参考信息 -->