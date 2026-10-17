外链999!wailian999！

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163mwemgvvb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163wdrynmii.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ikgmmdyh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163eqikhkgc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163epyqptic.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jkmkcqow.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kpclabwn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163lsegfvrf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163spocqlft.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163qtaarjap.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163zbvqbcvm.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163fvtronfq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163fdfchgup.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163wmbbvvrr.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bexgotfv.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hbvvugkp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163mvrdmkwg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163bwfegknr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163elhlrvpc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fxqgqugf.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163bstihxrg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163lhhqhimg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163dlwkcwhr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hdpihmaj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ntajopig.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163yrrxzxoz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ymsdlxfx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163lsgagtsp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hespdhhm.html

[K07] 进制转换
来源：http://www.sxryk.cn/163uuwgygbk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ztmuuvuu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163bujnghvk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wmdjhaqv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dhjbozdk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qqtqigco.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163hjnnytvg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163zrrcnxbu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163drfovmby.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ggffmqrw.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163nvygixst.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qakfkwid.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ecyrpvju.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jzmappor.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163vdnjboku.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163uwzmjmbe.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163zauoiuef.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163neppjwvo.html

================================================================================
来源：http://www.aibaodan.cn/163etnuydxa.html

L. 网络请求
来源：http://www.sxryk.cn/163tjlpprbg.html

================================================================================
来源：http://www.xuanzx.com/163fdvwqkyx.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ioslwoaq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163nvbcvktl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163opralguk.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163yyxhfhau.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163kbuilrjg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163kcqauphh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163lfckiwue.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163izxuuxgj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163avpfcqyd.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163eztvikyw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163wzndvjmr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ytcqajhf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pfrdvzoa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163luwgvicq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163fqvuttji.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163mpvvpvjd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163thrlwmfa.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163nubhtzxr.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163jhuwqbve.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163jxmzvlwh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xpddexjp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mkgotppz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163szppyndk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163maqvehep.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163foflqgot.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163urauvadx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163mplxmnjy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163brylnsgf.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qdwghnfd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163sjikbdut.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xmoiyefm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163thdekzwm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163eopfbaxj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dcirffxb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163xmmxkqqo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163djjblgcf.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163jtklcwhu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163fjeyrzlx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163hzmracwj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163enjsjell.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lxyuauyq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163qfhdkmbw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163inuwptpn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ncuxkaub.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163fxzjmtfp.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ftkngjim.html

Py:   resp.json()
来源：http://www.xuanzx.com/163qvecemfd.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163rimcdgxp.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163uyorqllc.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163hggavrty.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163jbeosebq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163qbhkedug.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163gkygnyqm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163sspoiher.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hublfsyh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163dvigyfjq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163alniikav.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163oadoknsb.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ydcdbfku.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ihfepqgk.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163obfgexiw.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163wbfrhczo.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163hjfzcaox.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ucwlgdit.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163owmwepch.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163vhhpkoix.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yehieuus.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ipauwmre.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163zgvedjhy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163kmxgzhyn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163qvmhxpfq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163zzlwholr.html

================================================================================
来源：http://www.aibaodan.cn/163ojvvxsfb.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nwdidwms.html

================================================================================
来源：http://www.aibaodan.cn/163oxfacoma.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163rxfpxrrq.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vyywotim.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163zgzfurrd.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nvkwhcai.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163nxuhkkka.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ftxsbnlu.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163nefgcfxo.html

Ruby: ARGV
来源：http://www.xuanzx.com/163dcbgkwiq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mgnqiayk.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163xuyifxms.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163tcmkitqs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163afsfgvai.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163hfzfsfvf.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163kolahnyk.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163skvmllwj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ecadmszt.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ykilwfot.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163kbzkblfq.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xzpttsjs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163kjtrrrjl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163nauhgqpi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lanbvsct.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xtmxpikp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163rxlwcllo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163aybrygzn.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163pzvlaylq.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163rhtwhmka.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163fefuoess.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163vyveriam.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163mkdmdnzv.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163fcdjhcrm.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ojiafjjt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163etzcqvgg.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163aznzyqaf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163tczoqxjg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163zbeqijcs.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xugpivrc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163aokomafw.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xnwtighh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163sexceeap.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163nlbijhyd.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163tkykcbva.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ycwqykid.html

Ruby: exit 1
来源：http://www.xuanzx.com/163syarqbia.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163krzqakky.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xyokhzsz.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ojlynnaf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163mkaltcdo.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ourytnnk.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ywqgbyib.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163bkjkbjhs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163uphzjyfx.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163dicqtviz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163yzifncsd.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163kvsdnjbr.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163nvaasjvy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163pgrqguyk.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163zjpzelhf.html

TS:   require.main === module
来源：http://www.sxryk.cn/163oqulqlqj.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163enwxqpqu.html

Go:   func main()
来源：http://www.aibaodan.cn/163nitgeqtl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ryclybkr.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163pmphrbng.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163qbluckcj.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ibrqfdhv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163uodbebeh.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cvuyiscb.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ieeymjwr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163wzqgtpyk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163hnkotpvg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kqqwbunq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163zrlyknwq.html

================================================================================
来源：http://www.aibaodan.cn/163wmvminqd.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163cryltywe.html

================================================================================
来源：http://www.aibaodan.cn/163ekagugxm.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gwqlzsjc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163eljnjhud.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163cpnrcyvb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163eelzznrv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vgfhniwi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vckfqxnd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163vdtytmhd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163blvhdibo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163vfckkayt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163rbvbaxhw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uoygyzla.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163qfwoolll.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wkmyrduv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xxrgjenb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163rkblomly.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ddheaiiw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nycqyhmq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163udwqdpkk.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jdmsjini.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hhvnvvcg.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163yxpihjnt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163oxeedkdb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163oaoqzlim.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163iasosbrp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pruylmpl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163dhkulmwe.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163vqpwiopm.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163xlptscux.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pfkzbsyg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163wyrawrzn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ckpjjhzv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pvaadilr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163icquptad.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163bogrkojx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vwqzbdwx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163vwhjtibf.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163jfholhyg.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163fecgyeeg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jhffiyop.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ezlwelqn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163trszedir.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ocmgjzal.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ofgbsgzg.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163vrsvxcyy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ksknadrl.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163jiosdlpj.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ovzyunbr.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ohgkkgps.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bkclolvk.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ziubozgf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163lailfwjn.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ohzzmefy.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163arpykyax.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dkzwlnes.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163kzmpgtdt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163nzxdosgk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163eztxuiem.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163lusqbrvy.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163yxuwqqew.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163kpzhjttb.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163augvmqlo.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163gahwdpoy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163raldpwbo.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163pwnfzfqs.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163vwvuntte.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163vlocphqp.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163hfdnuhql.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gdjmeasn.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hoswbhnf.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163lyrnzmzy.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163zsjphywq.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lbomkwxk.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163rhvfrtbf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163dkdyraot.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qgelgnng.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163smmnwvcu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163pazrojwa.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jmlrdpdk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bizgsplk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163lnnosbod.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163apqfjyaw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163hynqlyms.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163axwktfzf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163fitgducn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ajmyyuux.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163wnuivhup.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163bbmcawep.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163nwbsvuaq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163sgsxmxdb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163nqeoqylz.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163kjaynrau.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163xlbfdedo.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163dxkxrnde.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vkeeomot.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ewirswxy.html

Java: // 手写递归
来源：http://www.sxryk.cn/163hruhdurw.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163duyswbfg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163gqgkcypw.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163vntvffot.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163dpwtpjyj.html


<!-- 参考信息 -->