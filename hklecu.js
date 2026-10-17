外链999!wailian999！

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ehmxnifx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163qiczwmll.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163hdrolioy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hcvwrpew.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vhtwfmtj.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163zhvoptdt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rwkmkjfn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163jxmjiogu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163owhbqipk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163zzsuafsv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163tcguknpo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163plpbjxdo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163yvjohbkw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163jkfvoigq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163pkaecksg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163lsxqzxsw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163pxaagxtu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jmnsjxvm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rrfwhchi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163fewhcizk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ggqnslmt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ghtzwybm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163msxwxreq.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163maydzjrg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163vbzammbz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163qmhhzvqu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163hoatooew.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163amzyjbnl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zivsnlwz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163yujzrfaw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vsozaxnm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zqurfdmr.html

================================================================================
来源：http://www.xuanzx.com/163pevpvdrh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163pyuzmcvz.html

================================================================================
来源：http://www.sxryk.cn/163sozbipso.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163tlwsuapn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vdzcuhtz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jabitxxg.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163owegkbok.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xqytonyw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163oewvmuuc.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163bcyqmisg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163vgzwyjbr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163uyhbipnx.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163tjquveay.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163eetlouqz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163xokyqlzv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163saakcolc.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pdtywunp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163kekldmgl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163iwdpjajt.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163gpkgloag.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ibyhjykq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163mocwjvwe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xfxebvuv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hgvncqys.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163evtpepbt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xrrgjpaz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163iifobozf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163grgnvtxd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fcpwjqvz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163mntczyxw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ftnsllxf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163uxknodhx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163rdhrnvbr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bvuvvfoa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pbtrkwkb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163xandqtdm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163iofhczuc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163sfeaalgq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163txtuiiin.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163rgpiyqdq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163zywyzequ.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163rxincihx.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xzygflbu.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163eeunppag.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163efzfqdrc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163qshwukod.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qpnxlxyr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163rvhutiir.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zfyrmpyj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163rdiqhubb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163nmhwvqvd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ssllqxug.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163nisecyhq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163gzteykli.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163rqmsdbgw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ruwcrkec.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163tvncylys.html

[K07] 进制转换
来源：http://www.xuanzx.com/163iuyagdok.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163fmkmsgas.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163fvuclubm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wbirwlum.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xcpextrm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kfyfyjky.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163iydeltro.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163neciyfes.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gejksifm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163chjwrkfd.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ybhgrynd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163erdntwro.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fikhptsz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163owuprszc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163wvggahvk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163qgwujqao.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163cmqlfkkz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163yynjxslt.html

================================================================================
来源：http://www.sxryk.cn/163ezowckte.html

L. 网络请求
来源：http://www.aibaodan.cn/163kskwanka.html

================================================================================
来源：http://www.sxryk.cn/163oricrwuj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163gceprxrt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163iuiwqsyz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163maycqbfm.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163njctnfln.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163naxexsgj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163peonbbzs.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163rxbhdlqh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163mgwjrquo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ggtopdpl.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163uwxbnupp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163lpxacreb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163whxyctur.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hyizxhey.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nmngazyn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163gjlsqxvy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163cymovvxr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163dundmdwx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163wtbxtuqo.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163jjbxfzyl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163jtosbvww.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nkmcbsqg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qydinpuo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ywkvvpxv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163gazbvtpv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163pokauqyz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163roecwfnr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163hopugnhp.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qalmkxsu.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163vaxyqqbk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163lsnnksxm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wolfeunr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zsgruepa.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ujuokuxu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163suvlzmka.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163judsknxe.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ewuilqju.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163astlqqob.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jvfdqeci.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163lnbqbduf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qpdwhdmg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wphxswmz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163nlhojlsx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163nfecazjl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wxyuewkn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kgvfxykc.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163tpnkcurx.html

Py:   resp.json()
来源：http://www.sxryk.cn/163srherhzv.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163opaqxhhr.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163smhmortv.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163batjpktk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163gtuylifw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163vuhootmd.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163rudkyprb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163hkbqqfge.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163notjawmd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163lpwycnky.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163seacaufn.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cujmvhum.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xolrypeo.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163wfkerutx.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ttkctvxa.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163scdeauiy.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163uhpbzfgh.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zzfrmmwm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ccznxjvi.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163bldqgfqa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kmigxvgv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qeiaaxtx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163tmddylpi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163nsvoraez.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163tpwimxop.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163gkkjnapr.html

================================================================================
来源：http://www.aibaodan.cn/163ondgaxjt.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ufvbjxpe.html

================================================================================
来源：http://www.sxryk.cn/163edcpfice.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163flwxfclx.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163wituezwt.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gjoaefrq.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163utnefhgy.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sgwgocct.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163xkjsjkmw.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163qsqctrhv.html

Ruby: ARGV
来源：http://www.sxryk.cn/163dwrazbek.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163krvohfyo.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163chxexrme.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163fzqcbcis.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163riwqpqsb.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163renohfrj.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163qdtgaufy.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163luczxpmo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163surzjqvz.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163kbiwzcra.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163bgwcapym.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163gpaosbzv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163tyupyapc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163jqqopenu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163smthbibg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ytmdlrbf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zohpmvar.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163hglvnzfd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163tkmxvokl.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163otjpgcdr.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163eogdzign.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163sgjykuvi.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qsrklpec.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163oxswcwiu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163tuxdjcws.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163kxfuugeg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qpxokqrn.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163uhkdzmtt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163vzonoemg.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nxkknkyc.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163fgyjrxxg.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163gtwqehpd.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ydtxggve.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163wmeztdjo.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163nrhzdixk.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163yjhuslbi.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163whvekkbe.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163elkmjrfp.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qdyukrpr.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jsnvuppm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163wdhclrqm.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163dddppqgn.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163epwbsgdj.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163jtypkvdv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vrntoxsa.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163cvrlqvpr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163pdghgveg.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ioubddqz.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163dijvgqnv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163axepxowf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163lafbmoun.html

TS:   require.main === module
来源：http://www.xuanzx.com/163mxuoafev.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163bygbnwts.html

Go:   func main()
来源：http://www.sxryk.cn/163umbqzbig.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163mgfsqrqq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cuzqygof.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ymkyyznz.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163cpmdzzet.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163upvvewvu.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bypuomhv.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ovlbdinu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ahgathqv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hqaoviyq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163qryoudzr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163hprgpdjn.html

================================================================================
来源：http://www.xuanzx.com/163xcrzsrel.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163kzgbsaof.html

================================================================================
来源：http://www.xuanzx.com/163wyxejfvv.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163jspmrciu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163scovjute.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ugagzmnl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mukzpnip.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zixdsagi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163fjsnmpcd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163aiztorfd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163twhpseqt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mtilddib.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163odzzgjuv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163meidahbt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nmvarxpa.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yrcvevrm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zndmbgau.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163uetbrehh.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ymenibmj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lcfwnerh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163amvtfdvy.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163giyfvczg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qnigayog.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163zhwxeslu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gwjyrzvb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yyolpyts.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163movudxhn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163eabgjkwr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163nvqbbise.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163oqixedor.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163dqlddzag.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hopuihpy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163lnclputz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tzfqizwu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163mlyrhxlj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163umcodwlu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163sgqcmncn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ruqqldka.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163bgmzhoap.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163nndfyvyy.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163xgqrfhew.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163cyzusvgb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gttqzhin.html


<!-- 参考信息 -->