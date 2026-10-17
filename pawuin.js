外链999!wailian999！

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163bxvfscyv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163cmuwgtcb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163qalzdrhy.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pntidtdu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163tnvzzeev.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163jlyjcevk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163kaqszumh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163zsrssbsb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163jogkivwd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zzhjfgep.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163hypjrajq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163tydeklya.html

================================================================================
来源：http://www.aibaodan.cn/163iaiumigz.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mloteafi.html

================================================================================
来源：http://www.xuanzx.com/163vcdygojk.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163horxuigc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163tiwbnbmc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jxfcubwd.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vhesgzyu.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163alytjfxf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163qroqjjcg.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rxwcajuf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163bkwnmszz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163uvankvkj.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qtzddslu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163pwymsodj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163oycfjpsf.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fduktykq.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ajgvdcoi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ygkucvoe.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dbyvbezu.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163gbeedgnz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163drklzbdp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163xgsaptwf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163yqahpqrf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163mwasiufp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163benyafzu.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rfhxgbpt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163lnyeuvzy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mlbkbzro.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163cbcboawg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vanajmoz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163aaociixf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163yvqdtrnj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163gytudlly.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zrwzkbjw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163peeaedcj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163kxtllcol.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ipbikxon.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163fahbimxl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163cgzgichp.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ughuvgbq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163rjtwtllv.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163boeloiuf.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lpvzjptl.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bumgwymi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163bbmxmgfk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163kemjawsp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163kdyunrfm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163srmlrfed.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ptevqixj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163tofijfgg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163shhzohpd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163caqrkywt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163uijygamy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163otapekvd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kzynxvpk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163yaqmawnh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163pvjzdxfr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163syuzcltr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vpracrmd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gwtuizbr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xdlwsalk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ooxluvkx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163uownrmru.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ynpzwpfm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163gtiwudzn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163uvcwnowr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163gidxzimp.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163arkkdiio.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163esdmgzyb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163elqonnww.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163djdcojiu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163kpigrorx.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163baodzjbi.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bsqevbjx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163kwoqmwff.html

================================================================================
来源：http://www.sxryk.cn/163raalqnek.html

L. 网络请求
来源：http://www.sxryk.cn/163zmbaugkd.html

================================================================================
来源：http://www.aibaodan.cn/163aqlzrqed.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163jbiifmle.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ueiircnj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163bxjbwpdj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163lnklqums.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163jwmkgbgq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163htzogfdl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ecxrhdto.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163kmxrtsps.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163bpqescsl.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163htpdaqcx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163etlomwob.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vtxihdgn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163negcpuph.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ccxnqrou.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163bieauoni.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nythqabu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ivzfvzbj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163nmohdogo.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ijlnpgus.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163udspnrtn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163lrbbsyih.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hamzieta.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163drixgavk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163rblwtsxs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ovrbcbuh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163altbpsag.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163jgvitaxb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163tgqsnndf.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163mupdigcf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163xncwvvaw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163regmkjqb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163aojikted.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163bqblfrvm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163zsdmunud.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163oczburxq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163mdxakpqj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163cyocargg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ujomyebs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163npiruwwu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gcbzwzlh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xqnjasyv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163wynvgtgj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163svljmmet.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163eqacrvsn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163mhqztrze.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163roobwtcy.html

Py:   resp.json()
来源：http://www.sxryk.cn/163njkljxmi.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163xcbfiisv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163fcwjjwcm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163jrebkjlj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163fhxvorwq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163vmvroiwq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163widskjzj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vdnbvitn.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163plrwicwy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163hmfxahig.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163oxxxbsye.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lrgcjyfg.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pfijnzzl.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163llbwaxdf.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163sbqjznag.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163sisxlhfl.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163mepmwnte.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163gambhjpd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163budtisaw.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rjgrzerf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nueekpsg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mejgutiz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163oivjxtpy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163hgcgilfa.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163taexnmol.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163otziubjg.html

================================================================================
来源：http://www.sxryk.cn/163pptatgic.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163qicquavs.html

================================================================================
来源：http://www.aibaodan.cn/163enfaqqnp.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163avdtxjtm.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xbkyddvs.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163edusfdyj.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tfmxfiee.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ehtitywc.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zubahyjq.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xxijlwgz.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ustsmaoh.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163rutxdbsy.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163iimnokrh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163hxtgbmbo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vnrodsjs.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163jfdnxhgr.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163fwdurvio.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ulzhbadf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163nuvyiuur.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163kdmuoqhg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163zkgqbzkd.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163grmxfiso.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163updhpeuc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163chfdlvhj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163poimyqoy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163utottqbu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163hyasjqrd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163uaodsuxc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163iwpzrmoc.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kxyqwbad.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163jefwmwcx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163imrmhaiu.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163pixdfiyw.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ivldguim.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163aszjgjba.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163shiofmot.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wjewcizq.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163qbgvrlpc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163hmxbjsxv.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163bvrtcbsu.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163twfxxodk.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163hmborydn.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ywksdvek.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163rvqnzgip.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mffmbyov.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163dbxuxrhu.html

Ruby: exit 1
来源：http://www.xuanzx.com/163dzjwdxzv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163qysymfvt.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163uxtazive.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163kgbrakkp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163uqtzokqp.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163gmaceeqa.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163trgbplrg.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163fwkanhij.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163gvjiqomn.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163bozlidkr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163adpgblxg.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fopoohyw.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hcxwfxvu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163imimqbnq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163dulrpwov.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163rlvemgge.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163rphlherw.html

Go:   func main()
来源：http://www.xuanzx.com/163ljakwcit.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163quijndtm.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vpnfuzjh.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163uealqexc.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jtwjmozz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163kglnvfpt.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bqfcgveg.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xjqxamgs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163umkjrfbl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qfwwhxjb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163qoennyzc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163utxokzxy.html

================================================================================
来源：http://www.aibaodan.cn/163ousynjqf.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163sjuzaksq.html

================================================================================
来源：http://www.sxryk.cn/163mmoguzzw.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ykbyvxxq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ldaqyshs.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163vyvluxek.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pcmijogp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nbshaliq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163kaqaypyj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163fgdibygw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163qqlnluny.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163gagughdh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163xigijgxv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163egxycves.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163mdaloyfl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163djxajrul.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vlcezwpf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163wyqsfkmo.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ldobtahl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lmznexxc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163hbspdyyh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ttfvrees.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163irpavkdl.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163paypyjyr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kjhmicot.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ytlthqcl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163lhgettov.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163alqglocj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163lipkwvfx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163bbucmcac.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163hupjieob.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163eaxuhgyc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163pvxpmsfe.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ifbugabn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163koedenlo.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163uprwtpvm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163pdxpqodo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gsvphmzt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163msgyxjds.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163yqvfswrf.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163djezrlrp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163pquutyfc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163kyfykygn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yxunvpxa.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163caxtahyg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xhpveuug.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ylqxoswa.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163mqjobbbq.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163tmiyphrk.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163nlzvzhna.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163jnxvlstj.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uolvemlv.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mjeuhmkv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163qdgnulxw.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163myvczixp.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163uxklvlft.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hjwqnsza.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163byhveaox.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163gxnfcwix.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163izygzuod.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163pxucjuyy.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163xvxwzcby.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163citatnbq.html


<!-- 参考信息 -->