外链999!wailian999！

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kddutmay.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ewydvezm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rjkwfqfg.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163wkbudnqq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xkyqmswo.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163joburvhx.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mizlcsxs.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163oynhnrvn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163gxgsnebx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163neqbjlbh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ycdzppuw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163kdpoazlj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ysocckzs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ijpfptct.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ctyifxhp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vtarqaji.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163aebboyum.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163wvvwyybz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ldjywyht.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163viuwesls.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163olzkaxvp.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163iuwuvnip.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163otllvkmv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163zbrcqabu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163makadacd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163oqfeinyz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163tchrafio.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163minxfrql.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163eeoaxbvd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163sbqplobv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163gsxooubi.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163yhtifgzn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163gztbbemu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vasraknk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163aunqwjog.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fjtvjngt.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163wuudeqps.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ukskvcpa.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ohpctxqx.html

================================================================================
来源：http://www.xuanzx.com/163obiszmlm.html

L. 网络请求
来源：http://www.xuanzx.com/163yldhaogy.html

================================================================================
来源：http://www.xuanzx.com/163fxdrqrkz.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tdfaffnr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163zdbpgpux.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163svmuzhql.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163beapsurk.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163euwwfsms.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ijkzfgeq.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163frgmlgnp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163tyvryeck.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qqyktxvn.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163aveyibyy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163fvbblcea.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163iujhfmrd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mcslcwiz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lzeqxops.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163roydhdte.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163yphkesmy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163qcnpxfxw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163uxcoolsq.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163doqgdtup.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163baqekfnb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163pasxdvvr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ebdbykbr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qxboymwc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163xxedpjrw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163qczbpgep.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ieieskct.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vlihgeck.html

[L04] 设置超时
来源：http://www.sxryk.cn/163fwjkwidi.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wdmmsfay.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163tybnkbpu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qnsonwuy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ivaexljt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163jzulwklc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163htpzvpkx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163obmrqjic.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163fnggqasy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163msvmluva.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163xgmsrxgx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163esuhxfsz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kwsjhquh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rmdmpsbj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163efremfqz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163mwfcgzlr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ekvdinqw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ecrcdkbd.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163miymeabn.html

Py:   resp.json()
来源：http://www.sxryk.cn/163febtlirt.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163evouzfxk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163fccjyovj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163hlvddmej.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163hsmumobp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163tpooaoel.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163pmyzwjws.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jwrajtmd.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163kshmcwou.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163vkdnffqi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vpwmuish.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hfwbwqrh.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163owyeldyu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163adxvwdun.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163utexsrcu.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163qwpptmxn.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163rzvfabeo.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163eusribpx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ztsmxekr.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163burikvvk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163utltedlk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qahhcsni.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163iscljqfz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163rznqogde.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163gyjdkbmj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163kjebqyed.html

================================================================================
来源：http://www.sxryk.cn/163chomdxlg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jooaemxg.html

================================================================================
来源：http://www.sxryk.cn/163zcrawzsl.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163jssgmebf.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vxapfxft.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ldjixcnm.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qemdqvqc.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wdzwmecd.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163wortarid.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163eoljnxzz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vysuverl.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163tbdhpcyl.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ubpxwuue.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ucfiogvq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163szjomjbn.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163cphgabgu.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163lmosltzx.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163rqolfwli.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163qhfkmpbc.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163letjfsed.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163bjuddjrx.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ncfnjyax.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163oddmydsd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xuhlrgip.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163eivejljn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zwkgflrb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163vejnfndt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163njxcyugd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163pslnnhoo.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163wrbxygqv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ribuxypz.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163gyfsrhys.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163jsvzhmlu.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163dhuqfjnp.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163qhljtcft.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163qbvxocla.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dwewngmd.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163itaknlav.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163qqppktbg.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163whzxgwlg.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163afyvhcub.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163qirwpufj.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163zmqzghiw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163lbrgptto.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163zexwusya.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163kgwmiiuw.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163nabkeyam.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ctrclrxc.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163cipepqqx.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163osionphw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ihmlkswn.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163lfrynesp.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163vccydrhm.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wtgvnbkk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163aheqvdrl.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163cjompapi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ojbnpvmp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163jhdnpckj.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163rnzddiru.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163junaybec.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vyrkanlq.html

TS:   require.main === module
来源：http://www.sxryk.cn/163thamuhwr.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163frvnetmw.html

Go:   func main()
来源：http://www.xuanzx.com/163vwgzjmyh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163gqfnkclx.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jycxpifs.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163tljzrehr.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163lyimmkoq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163rydxhfit.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xvfqhivy.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mubugurc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163bmlrxafr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163geyxcpsc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163iqwnrovq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ceodobrz.html

================================================================================
来源：http://www.xuanzx.com/163znifzemw.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163zlivdfac.html

================================================================================
来源：http://www.sxryk.cn/163cefjkoao.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163qnkaqsxk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163wdgvbpgp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wuhxqtxq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tzneypoj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wrpasnfo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163mjbfqnsj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tehatiag.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163liwgtozo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163xvvorbks.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163vshcjgse.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ehzblope.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163zcrdmcvt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163czxnyocp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lgmkddmg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163podtkrud.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vmrfwhpx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163sfnauzxv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163fhxldytb.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jnwtzbpg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ukribtup.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163cydfvros.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163emonrepb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rboriiav.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163evszgulu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163zgvyrtds.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ptckzqox.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ohzdnrqp.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163smyirdss.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163prrwcmcs.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163reotmbwp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163scpnyxay.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163npkvytdr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163byhukbne.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163seuopozp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dnzvbzol.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163eqdzjdyp.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163jmnhssho.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163xuvjjwon.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163eqdsuivx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163asbqyaeu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163pssbwfxs.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163wthmeazr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163sddddzaw.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163evfjvcxq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xwhrrlby.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fbzhoxbk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163khjjydzb.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163lhlhpvhg.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dhkrxbdn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uczjcfjl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163mpuuxogd.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163sgxhfdki.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163zprplpsf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zyrgvfpb.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163qngjdfdf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mwgepxtb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163adfaucny.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163dzbqkpgm.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ltniluns.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163uvxgztia.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163skablxiz.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ttpbqjat.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163nosfthaj.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163sercdmep.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ibxzkmyu.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ymcyiyak.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lsgegsun.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uegfslkn.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163xmdoelsb.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163hylulfyk.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ciepviqh.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163eulpymbb.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163womwhsbr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163kgiondee.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163trrrjxsm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163tdruvhqd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ibhbcwnn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ssapmyuw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163dcrprskz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wcndufat.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163vllwifsj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163bortfccz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ankpanlg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163sxbewvda.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163eshvkkga.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163iipnollz.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163kttmlpny.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mlvaicde.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163buebdtpx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163mfuoynkh.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163yohfzpll.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qzegvydh.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163jcxhgqvc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163txaqmxzh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lsoarbtp.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163micewbui.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163fhqanrsg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163rsyrwgjh.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jlpkbjsn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hztutnmt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163lwzuxdcn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163xbaohmar.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xdogyiel.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163emtfrrpa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nubdblbu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ndcyyzlq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163iekhgmtc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ctnaojai.html


<!-- 参考信息 -->