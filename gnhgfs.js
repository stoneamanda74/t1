外链999!wailian999！

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163tefsnrnn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163brnyscvt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163zrlifdto.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163mzyxdnqw.html

================================================================================
来源：http://www.sxryk.cn/163zhlrxjmn.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163klcnzboa.html

================================================================================
来源：http://www.xuanzx.com/163gdnppzvn.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163clbqsxcp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nnsswbly.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jndlmgyj.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163oxadksfi.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ergdzeaq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163behybzjo.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163cwlvvirn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163xwmgulth.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163bhwmffcx.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ksolaric.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163lhvihzlb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gnxqcdof.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dxecrqwg.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163plekfwwd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163djacdkhr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mrhzbzao.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163iobbwgzs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163thjmiwoi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163nxzftvmj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163zcshbvyy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wajacfxg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163dhaorrtn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lludqdhf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wededngy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bcaclvts.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163cpyaiclk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163lpxbonda.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163byvhwear.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163uyzcqaty.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163dzojmtsw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wqmfvtbl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xiyadbzc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hdgpjwtk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bzqulsjy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163gokqblev.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163qgdsrqlp.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163munhicho.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163juazzryn.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163xvwkhwvg.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vihfbcui.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qwyxqiit.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163phyligdm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163bikqqhqf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163gnskeasi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163zgeyidms.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163qmtiaxxl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163wsimtghm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163oijvmogo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vblzkukd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ciejmzmy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163zkyzhssr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163fqgixmfg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163kgkhaufn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vanqovgt.html

[K07] 进制转换
来源：http://www.xuanzx.com/163mslkcbiu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163dldgwsug.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ugaywkie.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hdfxiign.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fsqjosct.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163sszftvir.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163jqlniobo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163jlkutmut.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163jghzyzok.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163edxtjrmk.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163bdxgglgn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163bebhfngz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fkgyjkst.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ztriacbb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163xeetlbfn.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163jouxclbt.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163wllixatc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jteyncgv.html

================================================================================
来源：http://www.sxryk.cn/163quvztfnp.html

L. 网络请求
来源：http://www.xuanzx.com/163csvfdeie.html

================================================================================
来源：http://www.aibaodan.cn/163xuldleiy.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163bnxfivbr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ykmvyxrx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163pycromxi.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163phknunoc.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163jhdqldvf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163dcaqjpvt.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163wsswuinc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163jsntrykt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163oipblqnv.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ngkousjj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163gxepymio.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163qcwygrdo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163iljirkxz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uveqadit.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163whengstx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163wjvxlwft.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163rgevytaf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163gblmvajc.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163mfreyhdp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163opopbjcs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163kowaktfl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163emzeqjsz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ljzfhbmv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163egmdimff.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163piasrvlz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163otzzetje.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163injzgsew.html

[L04] 设置超时
来源：http://www.sxryk.cn/163fgmrypsl.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163dyutwfeh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163xlybrsvl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mmjybdix.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ceyeypec.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pntapwpj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ktjgbphq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zgijattn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163skvdlaes.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163jloofxgt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163brxjyfvm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163gjtvadxn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ocknzell.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eqepmlfg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163pxwvceeu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163cbephqvt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163nnrgtkzx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163syxdrocy.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163tqvnetjc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163sxdmrrzb.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163tacirxxo.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xctmpddz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ekazhjoq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163wqnhsurx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163iqepovsg.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163vahyojml.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163kexlapno.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163vchwzbqs.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163fbuclwly.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163qqzojlws.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163aoeujknn.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163msvcgpui.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163gwcrotsl.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163jgjkrbtd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163eyxkeepy.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163wxaylzrj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ctfflybn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163mycdguek.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163umtiynzv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xwrbnqkq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qzbuyfbx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fsyxabsp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163rifrdpak.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163bbpfioeb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gumbrfmr.html

================================================================================
来源：http://www.aibaodan.cn/163cgjvaonb.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163oyrgfuer.html

================================================================================
来源：http://www.aibaodan.cn/163vohsokxy.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qrvsrrvg.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163gdtxamxq.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163gbclxkiq.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163knrofmdo.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kofzfesl.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163qrdhmzds.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163lbjvhdgs.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163binlmayj.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163bhswkxqp.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163hnaoxpbf.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163pbbmaiwt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163vkdmjogm.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163dtrblwsj.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163naeyhecn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163qjtijpwj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ofghwyrv.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gqvfxvyz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163msqafjxu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163gkykdcio.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163qqkmukri.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163axmatypt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jbahoblp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163oldwayuo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163pjejjvux.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163auaohheq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163soamgrpe.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163icybltjy.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163awyknxsd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ytngafbf.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163qssgthpi.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163flrtvmqn.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163lncavzcv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163iawyujqo.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ajgauinp.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163xlwolicd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ylbmulrk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ymovughe.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163idroraxx.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163fsfixflu.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vzdbxgim.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163jdcyrueo.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mehfjibi.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163xpiyzrng.html

Ruby: exit 1
来源：http://www.sxryk.cn/163weycjdfa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jzkjoste.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163rrbyismp.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163tqpacntd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163hfiwkbfh.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ibrhbnmt.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163odtpxqqg.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163xlbumemm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vyakbghh.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163hlraefrj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163mcffppph.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ibzfrvkq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163azwwzqeb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163gzxwvjaw.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163axgwunxd.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163sufemvlp.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163yqerisug.html

Go:   func main()
来源：http://www.aibaodan.cn/163wdcrkidp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163nvgkmkrx.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163yhmuixwu.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163jktsgnyq.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163cclvadys.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163iertnspy.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hovuhsgo.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sixxbpft.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163onpuzlqg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163hhoblhdj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jsfkxfbc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163lyexedki.html

================================================================================
来源：http://www.aibaodan.cn/163wnlmwequ.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vvtjamme.html

================================================================================
来源：http://www.aibaodan.cn/163resbuczq.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163zbildmrx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163bbgvdxvp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163lhpeeinb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163axyoftic.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163renoudny.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163idmzxnvo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tqdbbjib.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163clzkvikr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ysovaxot.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163unjnoids.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163edkmehaf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163nrpdbyek.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xpkfhsiy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kgroalwh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163pgsykpms.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vsmtmgzu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zvoyhphf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163emkvabxh.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163akgvwmbz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163jrukorbu.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163fnligxmu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qzbjzewk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163unbdhhwp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rjaxdnnd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ulzkhuen.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163hfrazyaj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163gkgupizc.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vrmtjyvt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ietfrxew.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163dldrrzci.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rpaomeut.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163cxltfduc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mqluwazt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163plnvjtyh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qnguawnd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163qsfslolu.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qhqshagf.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ivdjkgbc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jsjbhgcl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163yjutnhnb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fohkcgxq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163gxxzcpbz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vbjxakpw.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163vukequof.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163pvjnqwmk.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163kzhegebo.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163uwotfshx.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163pfppdozo.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163awbpsbbs.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163flpmijmh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163vnklieba.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ehhbesca.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163jxreimns.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163frsjkogz.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163euykvscw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163nevteyrq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163mzflxudh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163gwmwwqob.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163yrgltefo.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163hpoygnld.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163swdjmaob.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163virpyiyu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163tojtygyz.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163zswkidwj.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163qmazjjnc.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163pkwavopx.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kgkyohxt.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uqxowpmz.html


<!-- 参考信息 -->