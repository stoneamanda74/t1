外链999!wailian999！

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ntedgkjp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163kegzlvje.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ycuvsmkm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163duxnufcq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163vprtklgv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163fyuzisoq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ipmqtcgk.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ktzezntm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163byntpjor.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163onnyoxyg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ceoczbbb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163kukvhysg.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163lymyklqc.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163dbpfanjp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163jbopkmiu.html

================================================================================
来源：http://www.aibaodan.cn/163cooqqjpt.html

L. 网络请求
来源：http://www.xuanzx.com/163qqycehle.html

================================================================================
来源：http://www.aibaodan.cn/163jvnvtrob.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163exmtejfk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163svkhccbh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163vovfuyzk.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163sylmeavy.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fzorfsuw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163cdbqtwoo.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ozrykdge.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vrkoibdh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xnwkosme.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163efncmkrc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163uqzzgllx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163cgmzcfbe.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163shhaiksr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ycyykuwb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163lywpbtzg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163yvipmruu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163igjbheyr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163eksmkwms.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163tefomuwl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163aiyjxsmg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163cehhprxz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lzacaape.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vqnbccae.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163mnvkzdrm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163xsbyagjv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163takjtvac.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163iskodgss.html

[L04] 设置超时
来源：http://www.xuanzx.com/163txpeakcz.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163yyigbhec.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163tsxkgibt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nzkzplsi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zrcdlfec.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163gxnfoasp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ewbafmoc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163jqbujvnw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163yyclnqcm.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ibodnluh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163dtulvnbk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163dmcbjyho.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jigrmusv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rtmwcjxy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163tfzvuoaz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163plrzgxqv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ungywcbn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163sdhpkyuz.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163vceoczbm.html

Py:   resp.json()
来源：http://www.xuanzx.com/163wfykityv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ceghfyps.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163bunvtgqf.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163pwwqystr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ixajudjo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163vlvpqocu.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163gljcyema.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163cwdzmxym.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163qazwqabk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163zxgovbya.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163vmjcwxjn.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ptanjnal.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kfjptmno.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163gtapxqkt.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163snbvkfgo.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wdphllkj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xyzvnynv.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163fixuxshf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kjsmdfya.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163cifkomto.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163euhhcnco.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ylonqmqd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163vggcsgvu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163oluewyoy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163khfqolsg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163zdotdqqm.html

================================================================================
来源：http://www.sxryk.cn/163vmtolhna.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163npvujknv.html

================================================================================
来源：http://www.sxryk.cn/163xfwfxsfm.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xssagxgr.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163qjnfyjhm.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jrvuiuwn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zsiuvopx.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cbaqptke.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163tmwbcgpy.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fbcwvazf.html

Ruby: ARGV
来源：http://www.sxryk.cn/163qqniwmmf.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163oybjptqz.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163uqaglkzy.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163lutvmreq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163vclzjciq.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163qpleklgm.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zxyipsdg.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163twxpwezg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tdqihykg.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163cybaaqcp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163utrwfeoc.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163hmajbsgm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163qthwqbuy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163jpvwvaqd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zmzkwufu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xwuqbvjf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163bocmruer.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ividrbjp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163eqkkfmof.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163yecjekna.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ydyxyrvq.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xfmkyosx.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163sovmdcmu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163subhhatq.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163buwjgsmq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ctkmmerz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163obpjqeql.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vfaegjhc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163xoycmjas.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ppiexdvn.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163qwawpxlz.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163auiehpzr.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dhyezzep.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163khayxpln.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163xfnrbsgs.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163mzwjkkwo.html

Ruby: exit 1
来源：http://www.xuanzx.com/163yupdpivf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163qpxezmxu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jpzbkexa.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mumtznro.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ugbwnbgn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163kxcbpzuj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163pmbdioeg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163cyagqjds.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163xzoxaotr.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163hjenquru.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163bcjnkdja.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163fbfsvevr.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163akimimqj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163dzglojzf.html

JS:   require.main === module
来源：http://www.sxryk.cn/163nnhtxzbl.html

TS:   require.main === module
来源：http://www.sxryk.cn/163dirmbink.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gjgignfy.html

Go:   func main()
来源：http://www.sxryk.cn/163wlsseasq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163pmhqlpcd.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lszcbgot.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163nyvxfemd.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163eelyrlpw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163nfkinoww.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fbemfepd.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ovldlswr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ovqevmnh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163icgvmsiu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163hwmpvhmu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163cjrlcgpr.html

================================================================================
来源：http://www.aibaodan.cn/163qnrwvekd.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163cgghsgpy.html

================================================================================
来源：http://www.xuanzx.com/163kolpjfoz.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163tooyljss.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163cmcbylnj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163pogorocd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xkyzlxsu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163puxiujxv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163epnjehmv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163bkkxhfyv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ibnyvbbp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163fbotpdni.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163nkipmepi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ahzvodvl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kdgtpdzw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rrhahtia.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xlkojswm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163fkdnfztk.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163oyxutjgh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163yfltinxa.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163mjassolr.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163iqnsbdmj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ypptssku.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ubstiboa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yxrayoyk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163mgszkjnh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163zjwlvmfs.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ifsvdtlg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163pmymdzyu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163mesdaigl.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163tgavcjnj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163onqqooej.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163mzfnqovr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163goepchxl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163yrdqotsp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163suhakwmu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163zvrmhgti.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vwzquogx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163docmgxqk.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163tckqthfo.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vltwbsyd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163gsdpdybb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163rmevacer.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163whdiljad.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163qbxagcbc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163hpadrhod.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163hptlhcid.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163bienfjsw.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163itklwsax.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163uvccrecl.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ginczzsn.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iamyodex.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tjsddsry.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163oipnpzpp.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pkjyhlwl.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163jvhehgmf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qxwprnmt.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163mwginqqu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163gcoidqfx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163qcwvffsn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ismowgsu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163jlckfsgp.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163cwnsalbx.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163fgjrgvff.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ulitaxcr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163dxlqcpwx.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163osfwfzva.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163kduevvkd.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163nbjuukhi.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163wfymzcwp.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hvfaueuy.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163fuggjfdq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jcpoxhxn.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163vnsxulwo.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163kclzzfto.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163recucton.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163jjgmanvz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163nwamzhvy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mkwyowsn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163doyldfnh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163houwmqzq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ceorpamt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163wexyvmfb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163elwiejlh.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163kgjabcbz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163grgrmuil.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163pkjodvqx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ayydohbk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163mjonllps.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163vbtxsnjd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163icoamlfh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163hnfhpygs.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163felrgmtu.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ojruxipx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163dlmncvfm.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163gpclzhrq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bofkluga.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163afraazzk.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163klesawfl.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163pnlqlulk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ytwtungk.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163siudmjjq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ibzfokft.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163dhmkrcnp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163bybwywrz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nrlubure.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jlbtnqtb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vfpgzizx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163fiufjxrq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163hzgwugbz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lyrqpjcf.html

================================================================================
来源：http://www.xuanzx.com/163fykucxoh.html

O. 并发与异步
来源：http://www.xuanzx.com/163pfblpfog.html

================================================================================
来源：http://www.aibaodan.cn/163gwwsjjmh.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163lryospxo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163smxzifmh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163dnctnkjt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163nmcoxscw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ioaptgwn.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163wbeflqyh.html

Go:   go f()
来源：http://www.sxryk.cn/163ajunvvry.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ofaoualg.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163xdtlrcbj.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163maqvqldg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163rtmmcmah.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163hvhgyofe.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hiueudqe.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163giwebkui.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163msomeyeo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163bzuvfimc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163yfkxhded.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ygdlrvoh.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ddorkbqg.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ggzqzpgq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ntuhmoru.html


<!-- 参考信息 -->