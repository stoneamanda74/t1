外链999!wailian999！

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vwmfbnty.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xsrbedys.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lwuxoqja.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163gihkpxed.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163iyhvqklw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qmehkgtn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wepjutuc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ndnfobpv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163sqhhhdcl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kdopvebc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163susbgenk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163dhrspqiy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qhwnaovj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163pduuigbw.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dtmrohzu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ksgtyorr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ungmbrrd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cjvkhsbe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163imofwnsw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163zlpdryjn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xzsujbcb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163kwsfvopd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qufebcdu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vwyehfla.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163wuhladne.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cxcuzuck.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vehlamgj.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163psodrzjb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ohbytdcz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163dtpsynix.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ywttbxjk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163phvlbwwr.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163hmydrpvs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163zpppnkry.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163nuzryowj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hhxzpjdm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rfbweurl.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163sqcldcgl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kexzavqe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163cqmjspzc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163bqbhlxnx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163qtwoxtgf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163qlkhznlh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163mkhxnmmo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bjygalro.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163iekptjmr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bfyznbwk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163cqsbabsq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163cvbqqxca.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163pxiwbvmo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163bhinpnuh.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fetrndin.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163lmwofxms.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163axgvumpv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163easopldx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163eqndefld.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163kajnpqum.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163pqcxopev.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163bfybrdqb.html

================================================================================
来源：http://www.sxryk.cn/163qdviswwb.html

L. 网络请求
来源：http://www.sxryk.cn/163ujgiclam.html

================================================================================
来源：http://www.sxryk.cn/163swmnhjoy.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163xymebvxc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163sowocoxr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163vuweaack.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ytvcqtdi.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163hmctkzvc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163rrqheofi.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163uhbxnhul.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ezdpyvkj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163gccqggls.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163kodfmale.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163gsmhnbfz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163nszfbmxj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nuozmfzt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163snfxzroj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ripuudcq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163cwdiugvh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163dvyucfxi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163djopzlur.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163dgyvuhcd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163qbgtjhgo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163koeffjuf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xutkgfxa.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ztdphosb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ahdzmsvf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163jyfztbvx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163iretirib.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163yxpkpyrj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163qqarlwdk.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163rpzmllal.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163lrzajagy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pzjatqbv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163etywnkna.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163rdevjddp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163wyzifrvi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nhwdcnrt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163epjedryu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ufbcscfq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163iqwzpsbp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163oqpfyrvp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163okhtjcbo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163nvxylddn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163swvikmqf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163pxtzircd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163zrsfhllj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kyzitsip.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163kkuvjdio.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163yuqoudod.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163mjamccwf.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163edjanarq.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163voylxcxr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163farepwkq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163erxkjorg.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163acveswfy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163botikmsn.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mtbtrhaz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ppqkhanb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dnxfeknn.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hpwxxuuo.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xfxcqewv.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163nxavdcmf.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163zubayidn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xtcbmnkq.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163hylcuekj.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xqgpupwc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163wzpcltjv.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ogardwcg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fyacogsp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lyuamqij.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163zieirmyd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xikaxzbe.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163apftazbd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dsgwgudl.html

================================================================================
来源：http://www.aibaodan.cn/163lknombac.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163rqgismgk.html

================================================================================
来源：http://www.aibaodan.cn/163tkigydkr.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163puqlwsjz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163zpcqeanh.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163xbqsxagp.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163uzmqxgmr.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zonzwelr.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163waoohtqk.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163tmmcliye.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163cfovxmaz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163nqhfnhek.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163sjphrwcw.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163sbfpbgas.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163amdwvvar.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ncvxpaiz.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rasanfzf.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163lymcmlfz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163udabjoea.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163htykbbzm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163sqfeirov.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163bcrcvfol.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163teabwrqt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163fvvwvbjx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qbuamljm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ujfdxxwr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163bmdqsvji.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ikzvihmv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163zlqzuyij.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163jfleoorz.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163osbxkemj.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ymarmccb.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xazosjmk.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163dnxgdisy.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163yxkufhkr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163snxgzqyg.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163grjgvaxi.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163hwxpuplw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163okuouosq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163uqhksvtr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ipnckjzq.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163coxkpmsz.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163wvvcioud.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163phheqmwc.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163snxxxdgq.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163xahnnrlk.html

Ruby: exit 1
来源：http://www.sxryk.cn/163fyacjvkd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163skvtavzz.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163bwxkuvgt.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ublaecji.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163drtlodhv.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163hgslnxnr.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ouunvtvv.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163qcjdmzbs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163mfnahojz.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vemuktje.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163qywvmfsx.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ycuiglna.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vcthachw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163bztfbyrh.html

JS:   require.main === module
来源：http://www.sxryk.cn/163lxybsxxk.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hoiojeti.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163yjhqblan.html

Go:   func main()
来源：http://www.xuanzx.com/163ckyfmffw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163anovrsni.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163qcqespks.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ozfqaxup.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jzwvudmt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163yzwsjurm.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ujvwwkrj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fkjezllc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qtqdljcp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163tebzqtrn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kkzwxiii.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163yanjrzeq.html

================================================================================
来源：http://www.aibaodan.cn/163mvmtvsfd.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163tvlndbxu.html

================================================================================
来源：http://www.xuanzx.com/163xnecoswj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163tnrnpcoo.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163qamzauon.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163viwqijou.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163eeuyadse.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163tiqruwjw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163otjdbkvs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ononhpar.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163mtciqlau.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163lkdouwcr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163jrxfabyz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nvipseqb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163txhoqagu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gywjzzcm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163uigninan.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lehfbhxr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163burzxocf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rlwyjjox.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163thdlasyf.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163snecxiyb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163cuimtpho.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163hgmiwdmc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xhejgepr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163avtmlhwv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163yubfvoas.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163lywquzju.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163zmtcrymg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163mnzqcczq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163htxxbedt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dypwswtw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163hrqasxhl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vuhtcafl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pbxpveai.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163miaewaec.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163lsjvfwga.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sgesmngr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163fbctpvoi.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163byzxbfwr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ibiflqem.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hvbzfazo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vysxaeer.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qgdwotaq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163meoozqgp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163creryhwm.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163civhsqlt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tzrarefw.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163cnovleny.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163hszntgpe.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163rmzyswzg.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nktuekhi.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qvahhcwf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163lahzwcls.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163hitdjqhp.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163hgurxhdz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163igfeoeec.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ggmwzclm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163qrpldwii.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163usjdkaqt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163crdhsuqt.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163amutpcqg.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163qphufyfz.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163raydzfps.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tbxvoplk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ooqfgbig.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163szfxhlom.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163snetwybw.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rupqeylc.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163siovxrag.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wxmlzsxr.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163jpjerczl.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163lifxxrok.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163bmqqvumk.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mrhxbfdz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163qgbyyntd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163iruxmezm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163qmzwfewi.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xznmjswy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tvsewfgi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163hypgsciq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163kcjjfvym.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163tisghagj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163oyowmtzc.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163wzncdvzr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zhrqxpdx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163cidkqmzl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163byltlene.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163unudoubo.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163okedglhc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163zfxoqqrg.html


<!-- 参考信息 -->