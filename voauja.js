外链999!wailian999！

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163uetgeulm.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163tohbatnq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jlnvyevj.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163avcggcsk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163grrpfkra.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vffriplq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163cgjomtje.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163clqhpmqr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kjccxlih.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yhnapxwr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163hmoknkfb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hhsctgtu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163abbuauyz.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163pnirkppa.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163mynvuhgp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163uezvuham.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163tkwvdikw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163vfrrtprq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163kawlkpqy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163uolndtrr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163taviekby.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163bwhtftdd.html

[J09] 时区处理
来源：http://www.sxryk.cn/163dtqfmmqc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163qtqjlbht.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163acnogeqy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zglacthh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zwylyekh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163rjqfadwa.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163oqvrnbrx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163xtzesqxv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163wboyrvae.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163buyhwkaq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ocukhbep.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163zvujgrjj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163jqexmbnw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163hgvqtslc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qjtujubd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zoquiiam.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ujwafzpf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163mcmhlkoy.html

================================================================================
来源：http://www.aibaodan.cn/163dnnsgisi.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163lhmwrepm.html

================================================================================
来源：http://www.aibaodan.cn/163vnpgkhwl.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ppdtgoqa.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163xlrhuyba.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163flhdcfdj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163asyjiktl.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163phcrnqaz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ywfwlnio.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ljkqmdrg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rcndbujy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163rzgggypd.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ywjzctkh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163gsoqbfki.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163viryxnnc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rakbbmsk.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ztkxvpfx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163qterekzt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cmplepyg.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163pvizyqag.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163bvaupbmt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163pmmqmbyk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ulurebfu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qtcwrjrl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163apchwugd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mftlkpwz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163yxnlyrvr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163potxgioe.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163rfqhmduv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163spxjbpoi.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163pvtqvqzg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ecuzdgmg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wjktotgr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163snjxqhho.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ogvdhvyi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hpinobek.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vvxozxvz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163rhhaggud.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163gfaumbsq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163kqyqxtfa.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163kymwvbvm.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gjxnhbct.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hmvtnxlf.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kxztxuyp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163chtdlnvg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163itaihdge.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mfykikwe.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163xgkgesag.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163esizzrmt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163wbflxwfm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jciwsgjm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163teiuultv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zrqymjbp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ljaayuvc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163nimwzzct.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163xkxzhnuj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ekoahgmu.html

[K07] 进制转换
来源：http://www.xuanzx.com/163iykxwgli.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163panuyttj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ltmljnpd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jjqqncxa.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163sauptisa.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163kmclbknj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163uhivxedx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163kjphktzt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163pdejjxus.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163lsflevee.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163cosdreoo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163sygdoxwh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kdyrgcge.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cvrngjek.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163bkjzybjz.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163tcodjdst.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qzifxtjp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163gdidbocy.html

================================================================================
来源：http://www.xuanzx.com/163umkrohdu.html

L. 网络请求
来源：http://www.aibaodan.cn/163ebbbkoas.html

================================================================================
来源：http://www.xuanzx.com/163ebdzgqzg.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163akutavhc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163tluaamtj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ilifhmuu.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163wbfioink.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163svaqhubr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163nnkaupsb.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163xqdrxfss.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163lewnnfbx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ecoweclr.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163fgswnjhl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hqmyzxdx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163fhtkwhsu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tvdrnuiz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qbeoundt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163oyafoboz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163opeyfhqi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ibxvthsr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163xvsicctg.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163dhjwjlqu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163fkwtpclu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163zkgkxknv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163flrsoxeu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163msmnaquo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163dtlhvccs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163kptyshrh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ordisudn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dpoigevm.html

[L04] 设置超时
来源：http://www.xuanzx.com/163byozecsd.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163liwgpmud.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163uleuewfm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ojtmwkux.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cxpnooqo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163itdvqibj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dtingrok.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ysdcujlg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163lsyeaxlt.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zbukwmks.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vthmiaxu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163nlcejhnr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163azkpszco.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kbkiukiy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bzmavfoi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163cixrmgrs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163vlcbxdvl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163dkarqhbo.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163izvdmpkr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163jfqkbcul.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163vlxtuovd.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163untgkdoy.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163prmrshuj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163btedoadc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163lufsziic.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163jtvpifhu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163vpvmlmsz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163wgcqzfcx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163mjrggvuc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163pwamupqr.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163uslteoey.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xxrzmjzn.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163wmelwmmm.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163lxrwkqgu.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zljgpdbh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xpjvlkil.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163hjfbnjsl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ihlyldmd.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163qzmedzjj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qvzbtmjq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163eyfhvjwm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163faqirazo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163mylprmuj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163krnidzlx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163hnausatz.html

================================================================================
来源：http://www.aibaodan.cn/163ljvxljen.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ztdcjmpr.html

================================================================================
来源：http://www.aibaodan.cn/163plvbqmcl.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163nvllzakw.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163bdbeeynd.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163vlfthjpe.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xroewxvn.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vytqajcj.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163aemhqiha.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163kjsbwciz.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vlmyohgm.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ufamnbrq.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163cathcpfn.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163pzaqbumk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163hvzauepl.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ygkqgilz.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163culdrhcf.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dixnjskh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163dwnckvsm.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ttgwmuir.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163zsgcacln.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163aoqszxns.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163kllmtlls.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ukyssypc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163diqbnpkg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mkqjnbrm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ctrdeijf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163aeddevrj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xzszdbrt.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163cbhpvoig.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163qktnmxzk.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163yuyduynz.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163cbbvfjsh.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ezczbpei.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163znkghtyn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163wuyzrlns.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163fvfmaquy.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163krfqquws.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163maebapxr.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163phrdatlg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163qkqevgmr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163sewesmvy.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163zyomvptl.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163jubuwrbl.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163qijrlxhj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163zveswtub.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163fwwsfqiv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163gcaadhry.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163txjmfiak.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163todqneha.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163dxiyzbgl.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163mnroyyrl.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163bpqdowxx.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163takmlgmn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163nyyblcux.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163cgbvvxin.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jctrxjsq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163segssbvi.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163peddjife.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163reueuink.html

JS:   require.main === module
来源：http://www.sxryk.cn/163mgjasokw.html

TS:   require.main === module
来源：http://www.sxryk.cn/163rvpulzxa.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wydxarim.html

Go:   func main()
来源：http://www.xuanzx.com/163nwzxonoc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163qpqoivdr.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163gsedezmx.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163pcdnelnk.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163nfepdqin.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163kevjkbzc.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163dxosplfg.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hnkepmyp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163lqskwcnj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ocuflkzj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163vqvlhmyx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163hodoiksg.html

================================================================================
来源：http://www.sxryk.cn/163kajwfafq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163swovsrem.html

================================================================================
来源：http://www.xuanzx.com/163jtmslbmo.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ozsbwgzs.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163pweqlekt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163waabczgw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163amlugavv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163nxtbiftp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163kzhgszhw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163nvmdhaly.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163iqagwhud.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zxjoesrp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163vrdkbkrt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zwfkjebs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rrfgqkqg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163szyenjcx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gnvkxvnk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163rdiwiygb.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163rblvkdzm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mxbcgqxr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163cohicaso.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163lmvydixq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163kctemozc.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xdjexkyj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fuceanmz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jjlzyevt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vdyhycwi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ttqkdszl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163mxyegqor.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163dfgspkkt.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wrqjifxi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ftnxgcot.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163vosfcidk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163fjgivgcf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163sgqgdyqu.html


<!-- 参考信息 -->