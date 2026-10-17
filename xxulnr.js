外链999!wailian999！

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163nvwlsvti.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163syqadfdc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bdzmaece.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163lamwklbe.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163wnajzsqn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lopkrgkt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163lqkkiwxp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163nrwnpwcq.html

================================================================================
来源：http://www.xuanzx.com/163jbkqmuta.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mdlpdzrd.html

================================================================================
来源：http://www.aibaodan.cn/163nojnkxdi.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163yrpximlh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qhithbmn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163mlikyzrh.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ardtxkbb.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dcixujud.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fpmgncah.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163vlwrwkgq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ijdneklr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163kcqjuugk.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ujmonhef.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163coiisknm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163cpzjmqnj.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163govaqday.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hdiyjzlv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163uymlebea.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nzfbzpby.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163avaetejs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163hsxcharo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163hzbcaxjf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163rawvyetr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ulccaxdp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hsrfqbot.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xdltogis.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163axggjjmh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163dygmlkkq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ddiiwfla.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163luziqygz.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163xvmanncx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163bhafrsqu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163gmpxfrvi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jzrfyctn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jawclfru.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163epavuodf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uslqxupi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zlhdxyex.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163khmzzmfk.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163wisrvrgo.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163tlctlxpc.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ynmyfjer.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uhrcozbf.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fvpuaseg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wkbxogls.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163spsctdpq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163jbnfbwpm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ghrxwxzj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163yiramywl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163siudstop.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163yvpptlwk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ljpmwlld.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fyhetwmv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163dfwzhbbm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163orppzfoi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163jctojskn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163lxunpsda.html

[K07] 进制转换
来源：http://www.xuanzx.com/163pxuqkcwo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163qwyitczm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ftgynnno.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163culerzpa.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nqianxni.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163txpwjzkt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bcmuljpa.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163itptaqvs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163pkvwalpr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163vnictxlr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163rkvazfrg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163prsfhabl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hwklqdig.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tejmzjfj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163duttmvqu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ncukengc.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163qpcbhzni.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ogkjxgju.html

================================================================================
来源：http://www.sxryk.cn/163mxkxlnqp.html

L. 网络请求
来源：http://www.sxryk.cn/163zotsrsyi.html

================================================================================
来源：http://www.aibaodan.cn/163tluylaxe.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ngphckle.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163pqxfzkhj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163chllgsks.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163tctoorlk.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ntukhbtx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163abqszsws.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qxuyedfu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163kgagjnla.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163jnqlgstz.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163nxikowuy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163apuazojl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163rgfiatzp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cmfdbrxk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dziibjhq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163tiwzpxbw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ipddmrjk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cstnhwkp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163rtkvzvuz.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163kxxotuoe.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ggnbmefw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163szjeldhw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fhzxjvuq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163oevcybjp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yksgawmj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163djtnquth.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163jppkpgtg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163eptnidqx.html

[L04] 设置超时
来源：http://www.xuanzx.com/163srxoaplf.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163jtfepogc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163azrqoeae.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ulrqcuzd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ldfluwzb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163xwsnadlm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163gctomkru.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163wldsymyp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mzzwnwsb.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163bptwnzrs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163uwbypjqv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ydffyord.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qjnqxozj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ecyuykjh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163cbficyaj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163aekazufr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163zdxmomog.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wgktqpnd.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163vyvrracq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163cubleqhd.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163tzrfeieh.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163svhpvojp.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163gzqbyuxh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163jwxupyoo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tvjizcqz.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163pttqlxbj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163gtbasvdw.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163awumeuiw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163cvfgletm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163pngotggz.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zoqipaxj.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jqcxqsvr.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163vvtcxrnw.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163pduzzwbk.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ejizykzp.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163oxxbrhga.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163tjsbtxcs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163xfomuraf.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163oxulsmzv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163onllmgxg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mshhlxab.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163oefcwznd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163pzrriont.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163lvqbuofl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163jtuleuud.html

================================================================================
来源：http://www.aibaodan.cn/163nokeukeq.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163icbhxtpi.html

================================================================================
来源：http://www.sxryk.cn/163inqssnur.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163feapjkgv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163zgvhosbu.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163yizgljkb.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cqtvuxcb.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xwbvdrgq.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ojixreyo.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163krpwopjr.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163huflmvoc.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vjnseszp.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163wmghourt.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163dldxxaqa.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163urvjpwgg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163acsyxnkg.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163cmlhuxqn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163rmortsee.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163fhsugfug.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ubtlztzz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yexjhzio.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163gmmwigth.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163odukuryq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163kveputng.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ggionvms.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jjyxhvpv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163pareaqzf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163nbbgisnr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163jdhifvgk.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163cqunravw.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163uiloigco.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163wuhkmffi.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163yvjujnvy.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163uqvprbto.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163doiaamvp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163zlgtnkkw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ugrptjdf.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163taifgkpg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163hinhnrfj.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163yxfifymu.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163evmkteym.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163zwwrqsgs.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163onrlwbep.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163wncpziwz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163hblspnwh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163atibbvoe.html

Ruby: exit 1
来源：http://www.sxryk.cn/163vpzqnabs.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ylwregyu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163idjrrwfe.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jqvixmgr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163sxjszqsc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163zqdnjkuo.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163tdcdzhra.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163vqxzjyrz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163oybjhhjo.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ibqfozth.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ojriwhcu.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xjbdxclf.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163kcncmquz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163srlwmoeh.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ygybwizx.html

TS:   require.main === module
来源：http://www.xuanzx.com/163gsnmqsli.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ulnkindt.html

Go:   func main()
来源：http://www.aibaodan.cn/163gpmvxkgj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163pudcnqmx.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163sxsjhngd.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163mdcqvmiq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163iieiqjis.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163zwxksdcz.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163yawfairg.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ikpetuhg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163deyyqhfx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hsfdgmzi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163anapkdnu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163uvukajyo.html

================================================================================
来源：http://www.sxryk.cn/163yvffkgij.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zfruvxbo.html

================================================================================
来源：http://www.aibaodan.cn/163xynhxobz.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163rokthjrg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ukodkxeu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163tlkztnqn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hvtnaqwb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ujjdphjx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163jzthlfaj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163bzzgpxxt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163quivsaij.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ubklninp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163jzsafzkg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xdzuxtnl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163lfzdffsj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pobqahas.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163umvpiajx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163rsuqxclb.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163szrisgsr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163tlxvolnl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163wgpmoqhs.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163hgskqaeh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ipbfasyq.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163hukygmjy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163svvrczft.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mdtyvmpe.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163inwdnxxt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pvbvyhut.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163utyaukbf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163mloaxooe.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163vjthrhbn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163pgrvhtgz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163nilxbxhg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vorcsfth.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xicoelvf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163cemcpcnd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163izvfzgna.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dhmonesd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dldmzcfg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163jmkvwzgm.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ypzcbsqu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163tyzmpbka.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rsybgcgz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lwdwwfac.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ofcotmir.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163puufjlbv.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163uvgqsvof.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163mdqfyint.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163tfmydkac.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ebpmgicn.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163gaijukrg.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lgyrwkpa.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cnitupol.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ouktsamt.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163hflditsv.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163thigbhjd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kdpvhjjv.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zumuvqhg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vjjwuclo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163nxjskcef.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163tfjmcbqx.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vbgsdeou.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163upbgwclv.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163qefuiilm.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163dnrezcxp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163nqesywei.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163rdztfzww.html


<!-- 参考信息 -->