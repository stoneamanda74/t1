外链999!wailian999！

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fazxfytn.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163bmggwcuw.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rdwlkyya.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bakkvwqa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163feixgtpw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163dsfrwsxf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ywfcsfms.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tbhelwzj.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163xhhlurhs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163knbmqrdh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163tduxercs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gwrwiiue.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163iebuothc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163pdmjhjou.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163vytfwlax.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163xzoghvsq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163duetehay.html

[K07] 进制转换
来源：http://www.xuanzx.com/163rlqucfol.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163fgnvxuhb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163qtbflwpq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zgopcfoz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bgptbgye.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163udznypak.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163talaapvx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163xkqxfpbr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163fnpffpfb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163fdvdkzbr.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163bgmvyfvk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163zpqsipup.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163yftzhrbi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jgesbalp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ntvlcuzp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163uezcfcbi.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163kfhwnbjp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163apeohzpm.html

================================================================================
来源：http://www.sxryk.cn/163xdzytmyj.html

L. 网络请求
来源：http://www.aibaodan.cn/163oypvhbyc.html

================================================================================
来源：http://www.sxryk.cn/163qigsdcxw.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163rhmfwpuo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163qbfieyrn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163yfujxbdv.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163xiscrpuy.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163elnesrpe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163btreeoyc.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ahmlvpfw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163hpsinpvr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163sklgtugw.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163dnjvawsu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ctpgwlzm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hdcvfbxg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163eqeaduph.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163aaqrybda.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163xnzjkgfx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163zhqxmdhd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163iiupgvax.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163kccryswn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163fsfahzme.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vtactqck.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163tbhfmwjr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163filuastt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tnbthfht.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ijglioms.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163wgvzyyck.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163phavalsj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163uwaexgyt.html

[L04] 设置超时
来源：http://www.xuanzx.com/163vapjoijv.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163goxkgdom.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163wlqyymkn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gmltibbz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mwzuoesw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163nukoqjny.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163krpqgbdf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163gbopeaon.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163llvwmzqr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163twuzruhe.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163tnphystk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163xgxyczyd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xpmpocal.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jsjnnpvt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ficcwmno.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163upwemjdy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163sxmtycoi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jiqxbkwi.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163lyclmlwy.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hflqbfcq.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163yxbbxazz.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rpueqywc.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163birkqiwx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163bwtylpen.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163puduvecn.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163fhryowiw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163tpaiforv.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163fakixovr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163szyfbdbr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163stgfhsxe.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163rersunhe.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pfgrytvr.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hranfotr.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mttuczsl.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163kqqizcwe.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163akkgiohk.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163mqesppgn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163oyiqqxmu.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163umvrrsbn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xdmdefeo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jluasnhu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ytltxslk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163kjwaivrk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163nnckchnd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163qytfnjdd.html

================================================================================
来源：http://www.xuanzx.com/163auqakfhh.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ctsadnrm.html

================================================================================
来源：http://www.aibaodan.cn/163ksgzanog.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163kluuupgs.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163vhmhxkpv.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163iwrikqcs.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qloicgyw.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163rlczagcc.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163lmpqijug.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163elogitrz.html

Ruby: ARGV
来源：http://www.xuanzx.com/163bxqnurlv.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ckjmlwgs.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ukyojcls.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163knibgvxd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163mitdcqxx.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163snvrxuqr.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163noasmqqe.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163kzycinbf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ysuzpccv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163uapvsswo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ikmcuorf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ddvqjnle.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163jijgmycq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fyxmuybu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163geznbqpd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163rxrxewnr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ptxfxddf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163fbattpwc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xqaldcrg.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163pldahjew.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163whagxats.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163jztcbagy.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163zpoeruza.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163dnatfmrd.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163tvfttxjw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163mqkbvnby.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wpvosmuu.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163lpvkouvc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163usdxahwt.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jwdabaaz.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tasuordx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vnsgvuya.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163gpzlpjxf.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xlvdfnfx.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163pqoxyzlj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163kiorffyf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163uvjzsqre.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163drgtgxow.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vcgxzlqt.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ahpwgcct.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163tlvavkwn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163flalndfy.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163wzqdvuty.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lgxtuuuc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lequkzyv.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163kkwpwlps.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163pjganstv.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163qursbpqk.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163wxfoxfch.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163nnrlllar.html

JS:   require.main === module
来源：http://www.xuanzx.com/163zvnxdbvz.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ylqcltmw.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ujrduglt.html

Go:   func main()
来源：http://www.aibaodan.cn/163oltnbkvs.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ogupopvz.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163eusjzcaw.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163zrqtsgtg.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163tuwgtnyx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163qbxkjcym.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wymdvabv.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163oryewigi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163yhywkjyy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163jcgyglbc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163szayfdsn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163euevvrxx.html

================================================================================
来源：http://www.xuanzx.com/163gbrwtwkd.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163sgrtaiiv.html

================================================================================
来源：http://www.aibaodan.cn/163ffqousvb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163lohqtjsa.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163utfjjetl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163xrfcqilo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vgxkqepm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163sdrrytjn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163bqvfcqas.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163zgrzelau.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163enfopvju.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163dxrsgzfw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163gotwkdpk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163olxmasci.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163oyywrkpr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ttgolizq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163veubjqdn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vmyryvyy.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163lwbqfzth.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hylouori.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163aubpmrry.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163anhubzwu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jgrbeccv.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rftrrdaj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163igjnruep.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jmosbuos.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163vpcjfxnd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163nodlavoq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163fvbswvsj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163vfujfcmb.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163mmtdpqye.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wozpejoy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163zpwzgqtt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wnlyjwvt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163wyjqzfpy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ihfkdasi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163rrjxaxiz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ivqyjvun.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163pqdgjhbp.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163metyzfbf.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163mpusmvru.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163wrdgqrzv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163quioaxog.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163rdtnioge.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163frgqaitf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wwvmyrah.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163pulmbvlm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163zzbmhtbu.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163dqtknyvr.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163puwoyfmh.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163csahveba.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xdtvlycj.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163drtscnpz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163lyqrwlsc.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ijugsnay.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163wdeslfjt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dfwxbmbq.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163bvxotnnm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163xxgkzynz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163iglhoeug.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163fsqdzryr.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163iyyjaqah.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163dspjwasp.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ogawamip.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163czccnsqa.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163omqmtjhm.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163dgjemrjh.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163lbgbfiti.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163xycvspea.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163srkstqdv.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dwkakaoh.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ngplnxup.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163vczsicep.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163dzycvcdi.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jpvoyala.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zwpeqlri.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163rbvkzmvt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163lybrfeim.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163mqomfadv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163bhlxntxd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163tdiulvxh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163fhedbuot.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163iuzixele.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ngfhqusc.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163thdjilgr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163rcrncxpl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163vtfqhwht.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163mhquatjg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163nsugvllr.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163qvaajgbg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163fzhsatje.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163utqannlk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163dapnuaff.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163yhsjjzxi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163tajhjtxy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163hoexdegf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163anoioaup.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163oqzfddfc.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mocvbmey.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163zlrpqsaa.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163darfbuxd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163diqmillh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163svexgiwj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163hfjqtikv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lnwczisf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ypsqlmom.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kkaqnraq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jefsljqj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163rzpqvkgg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163qvjodzpg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163yagsyfoe.html

================================================================================
来源：http://www.aibaodan.cn/163lukzzyur.html

O. 并发与异步
来源：http://www.xuanzx.com/163lqlgvhwk.html

================================================================================
来源：http://www.sxryk.cn/163ntoeqwic.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163rebmofum.html


<!-- 参考信息 -->