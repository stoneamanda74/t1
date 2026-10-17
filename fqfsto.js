外链999!wailian999！

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163jqaqqeba.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xcovvrli.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163syoqfugi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ifketnqv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163bueifrdw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163dopoqkqj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163edoxibwk.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163vxwgglwo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163layvuuyl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163gvbxowvq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163pjreeghg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163xakkjgeg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ivomzebe.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163vdwcqhin.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xbwylatc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qbzktlbl.html

================================================================================
来源：http://www.aibaodan.cn/163cyotkjsz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163yxkkuqqt.html

================================================================================
来源：http://www.aibaodan.cn/163hbadubyq.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rseqwyvi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gurejzdl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vcintjkw.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vomkdygw.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163juldabfj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163duynodiz.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163zmdvxkzu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dkztxzhp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163kisahxqj.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163pqvmvxnl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163xajutvkd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kmyqvsds.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lwblahzx.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xsiswydu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xljnajwy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jhnvlgpt.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ficiltou.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163yacizngr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ommzducz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163egiuidzr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163aryttdmv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pfvfpzrr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163deizteaa.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163giyclxgm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163vavclqej.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163frdybcga.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163adpshwnm.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jaathdml.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qgljzrwm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163vuiidmig.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163eancrfmq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fdepccmm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163fxcahtux.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ekqdakui.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163aixylfxl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ykttqyde.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ebqnvpzu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163hsnfhlis.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163recfpkpk.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qtxovurx.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fvbbxfoa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163sqjhjbhb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163cvlnayxs.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163biochblh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ufxtojlc.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163egxndgpk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163reekpbci.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163qhlvfkyr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yqbackxq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163stgqcguc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163yllspocz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163hlfcbzwt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ahsteuuk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163drdsszqu.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163muomxjxw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163guklrvwr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ugcfgddj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hmloremf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wbflyiiq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163qnmirtur.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163pgwdptzs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163gwfxjfcj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ooqqlvdm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163fvsdmkaw.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163xoxrpuct.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163qgonroue.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hrucodpa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pggkbnqt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163fizgjhyk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163plgrokru.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163jyspwunx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163appfzopv.html

================================================================================
来源：http://www.xuanzx.com/163fozpcwvm.html

L. 网络请求
来源：http://www.xuanzx.com/163cgbrsksy.html

================================================================================
来源：http://www.xuanzx.com/163kqyagvij.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163iualbrsi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bodkhmcb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jekszxli.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163lqlkvpol.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163uzwmurrh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163nfyvswfm.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vkqufzhy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pruupmzt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163gvulcqnz.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163khsmbyoe.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163feqzixok.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163xhvxkjyq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163cfzugrcu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163okpafbax.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163usuwnlcj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163kzsvvjgh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163wlxflwcm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163xiqxpyws.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163kthiolgb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ipgmqgnh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163kagqzybf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bmcugrco.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163oojytqei.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163oxzfysxa.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163oupdaruc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163hgpaippq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163qspmlmfp.html

[L04] 设置超时
来源：http://www.xuanzx.com/163aphombnm.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163cbwhtguf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kjtgjmfi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163bhrjxmmb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163azgoyfwo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163rqrwpima.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163oalgfvwh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163kylkdlkx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163rxbyawjx.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zgduvxre.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163fbvyfmms.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ttduxplq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163obqngnkg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zyzzgive.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kfszaenw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163rymqqtrg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ypucrwgo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163dbnevezb.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163cqaiuare.html

Py:   resp.json()
来源：http://www.xuanzx.com/163rfucztys.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163suxwfaip.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163lkkbsyeo.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163wldasyqo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ofgaizwd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ewkkaohv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163juqtgovv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163skvjhfll.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163pslkitfw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163kixwlkdi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163agdfzdzx.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lcyxiskx.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jvmpvgam.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hltiiqtg.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163oulisutp.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ytjwappr.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ouufyrog.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163pkinxtgw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163nlkcctrn.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ykgvzrxi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dlmppeug.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ybwkwutl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xhfwzath.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163pwyoqhjh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163mmgmczhe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163lbyibloe.html

================================================================================
来源：http://www.aibaodan.cn/163vvwhdevy.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163zmwtehiw.html

================================================================================
来源：http://www.aibaodan.cn/163qukaslqh.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dwhhxeby.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ncorcjut.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163hqtnaclv.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fsxbftqe.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163elpjahxf.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ymzswwrb.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163orbzqrtm.html

Ruby: ARGV
来源：http://www.sxryk.cn/163veipiltt.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mzuuvnbe.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163utqvqxny.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163uiannhxb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163febrifcb.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163mmaayeab.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163erjamlvr.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163fbxxezcw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163fkxofctb.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163qghgrwoq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163xorumepx.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163egteuaso.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ajfnqtfs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163tdovbvun.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163irgytzrw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rzkwqsfp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163pafstrpd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163aqhelxtw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163rkodcidm.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163uyjtgrbo.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163icvlofpg.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163jbjuqvdi.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163frmwaajb.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xlzqaauj.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163dnpyfthe.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163bdzgbtkr.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163qdkqoxur.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163mkphtilg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163gojanwcd.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163igtzohhu.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163qridbqnr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zvoqjmad.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ptgymgbf.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163uiczffng.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163hlcodxpw.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163vxbmxguc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gdhfmkkh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hwyxxoyl.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163tmiovrql.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163rmycxlnn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ywxcdmkl.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163asbcmzds.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163hvgnbwkz.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163mwosxcrq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163jukfqvuh.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163gphouvig.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ewjoorut.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163wvzztpiw.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163kipccivm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163qxpsufkc.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jsmodvzg.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163oliwcfcl.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163knpgqtlo.html

Go:   func main()
来源：http://www.aibaodan.cn/163neqnqtrq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jssofwej.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163bjrlxghn.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163uiblsgqn.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163nwwavsdj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ropjelql.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163opxgiynw.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163flbfwwgs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ddyiuncx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163oljqupkw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163gepzmxxy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163dbnzioej.html

================================================================================
来源：http://www.aibaodan.cn/163xxwibwno.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fqnhqeuw.html

================================================================================
来源：http://www.sxryk.cn/163bdbbqnqp.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vrduxzjn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163mrjsrmoh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163zknyeyna.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mycjshyz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163agebbkmu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hzlksqrq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163xgyarmtx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163wqpnultw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163xxhdcpub.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163jfmgxbhf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kpmopuoh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nbxyzwcd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ocpxpbon.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yntxittt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163zawzasvc.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dvhpclvi.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163erhkkyxb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163hryielua.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163glicqxxj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163pfodjekz.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163svyxdovq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163trabmkdc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163srvovqxr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163adsozyzs.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163pgneigfw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163pryknwbd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163cmfxklzv.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qpcnwflr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163riswozam.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163kitvjxbq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rfuoqayd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qvzqszli.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163kfcdbmle.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163nrjmyoio.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zzkivatf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163wqkoywkb.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163nloubups.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163foywdimj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163iyvjoefv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163reervmxy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bkgynbde.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163pdnrttak.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163wacnfpfo.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163hkgbbfwm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163mixmpkus.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163optchbgu.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163daplrtkc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163uajneilv.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ianvaipo.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163eplovemj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163bzzbghnp.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tflugjpt.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163bytxjjqe.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163kfgsibhe.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163sxoxyvbr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163argkdnyu.html


<!-- 参考信息 -->