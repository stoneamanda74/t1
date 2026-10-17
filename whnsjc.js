外链999!wailian999！

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wllpydfm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wzuseqmr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163bqsgexfp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163edwiuqht.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163odjrubee.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163crshfkel.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163cytcjtif.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163csbxhvxp.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ddgocfxi.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ngzaxdfg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163cpvcmwpu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163prhqgukd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163usvweubj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163amfrngia.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163vyvtwnno.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163khgjdegu.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163yddmtrce.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fkeijsda.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163awupsqed.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ipkuidim.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ynodgezs.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163vvvnmwnn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163lohyqser.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163guylzkav.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qxugyqot.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163jtdcasgr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163uqnvvltl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wkxvmdcp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dwrabuqn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163cnqbyyio.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163bgbgazrb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163qdidydpj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163crrxpajs.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163rbbgufwn.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163gvpbdgnq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163tkcogiff.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163dkklnezc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163vgehrmcy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163myiavnkr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ienlrxzr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163lmxpaben.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163smvpanqw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163orddqmur.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163zjwqkzjz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163gcqjopbi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163yfarhrfs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163jjkpyxtz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163mlhozjlb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163biozuhpo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163lyojkfak.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163wqchnxoe.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zatflqke.html

================================================================================
来源：http://www.aibaodan.cn/163uisjkqgv.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163clzvfzzr.html

================================================================================
来源：http://www.xuanzx.com/163qkoetkkh.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rlvkmgve.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wmvfeuom.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163yvahyasn.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pivcrbte.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bviacipy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ogqmrzpb.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163nsualquq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163pqcdjrwj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163agyjrtia.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163zqfadtaa.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163inhssdhi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163uwcpauuw.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163xyvmyrjg.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kygsvujy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163esgstzxa.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yppinwar.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163mnbmxbjy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163tnparemb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ixwexlmg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163gfjeyavv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wtuveuta.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zyeucouv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bdlkvatv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163rpauccnt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163hozucvgd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163nrzrkbwn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163slbyhugz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163sumuesgv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ugktrcbw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xnuhkwxs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163slrltolu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fgxgbgzq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163gjhaffqa.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163reblqtfh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zgmrhpgg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163gxdnided.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163wuhroqwt.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ipyuwxuj.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vntojeoj.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163udegylgq.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gyxnrcah.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ehcqrdyf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163uflvatui.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163znivfaij.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163skrbloyu.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163iizjthvl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163cdnusfqw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lmurjums.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pnpmagtx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mtlnsudp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163azzlrlwj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163nwlivhiz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163seprhbnf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163mvdgrwlb.html

[K07] 进制转换
来源：http://www.sxryk.cn/163tkquhrak.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163qrfaiaes.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163dasmvavj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qkdvluih.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bqbxelum.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cvemrwwk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163twiuvsjv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163hthxaayc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163lfwhmzbs.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163zlaascqz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ztvdzfuu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xhrapdjj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yaeuebpk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nitzztce.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tnetlpow.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163gfsvxhkm.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jykjabgu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163nxmkxqgv.html

================================================================================
来源：http://www.aibaodan.cn/163dbdsmwin.html

L. 网络请求
来源：http://www.aibaodan.cn/163fawbzero.html

================================================================================
来源：http://www.xuanzx.com/163alawwtly.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tosggzdk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163aqlonppd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163mawawvnk.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163bzyxmeeq.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163vpkrtdwr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163dvftvrqf.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163zxdtgeay.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163gaknngxy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ednjbkvd.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163zyehwguo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ohormzfw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163gicpeslr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163faueyaol.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xtdwnckx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ntmgcbfc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163adbrwmfe.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163vuwhniqp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163sygvvxwi.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zbmfqwwj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163uzasdmpt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163saxwqhtj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ikzfvrol.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pjfwqebs.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163sjetocva.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163beygaflm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163pizecnlu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163lwmxuaik.html

[L04] 设置超时
来源：http://www.sxryk.cn/163looyvorr.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163pxmhakeu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163bjzueycb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hhlfjqbs.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ehktutpj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163guibstvh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ufzkrzba.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163dohbvfln.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163bkyztmey.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163koutgoes.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163bjjvrwsn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163tvujerxy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tkhxhsdi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kxuflxeo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163vihoyydm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163jqfztcvz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wxfholtm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163mizlfzpm.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163jreooooh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163weolixgk.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163mvjcyacy.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163btwqjvgs.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163fyxqvhrm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163xolovosp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163lnhpfmyb.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163tyoqtwbl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163kgxljjfy.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163dalwtgqu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tacgasat.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ufvkxvwd.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wwhauwqf.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163chcugnug.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vhptppwd.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163iywfshlp.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163gtczbogp.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163tslzwifl.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163yurvrilj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ovhlowjn.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163kdoaxjyd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mqhafdel.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tfzdyctk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163haxudrok.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163qsbcvabz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163criqtpqe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163iwdtdgof.html

================================================================================
来源：http://www.sxryk.cn/163xqwghuvl.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jufxoscz.html

================================================================================
来源：http://www.sxryk.cn/163tjpcafib.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ktcgdjkz.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163fhijvucf.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xqrdzxuc.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ezrsqhdo.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jlaaghhc.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163orpozvpb.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163deivbtzk.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vtwdfuhm.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163pfeenzdg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qelntsqp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163fagbsrtu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163sotodpyt.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163jyjeladq.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163oydxvyms.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163drikqwml.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pdpxlvlf.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163urhrxkvz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163xwvsscct.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163brfarfkf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163uqfpogjl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163lmcxuvzk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hwirhlxr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163aagrxoik.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wioxqtkl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163hhkghnce.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163hqbybpwn.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163njomzodg.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163pohkopil.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163aihytnmq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163wpfkexvz.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163bpqysqck.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pqptkfei.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163stulpqeu.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dexitwka.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163kzgnxgke.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fmgdbpzu.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163pqtsbcjx.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wluxgcam.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ochpzvgm.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fyisnjje.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163rcvcgrjn.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ixyncclp.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163vydrjkpu.html

Ruby: exit 1
来源：http://www.xuanzx.com/163aeaewrvp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163sokesage.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163qwjumxzi.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163kzdnnrzc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163spxwzlxy.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qxtrxlvv.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163rkvqzcdb.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163uqmaoeqo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163klwodsuz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163osjdbdcz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163zyhwnibp.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xhvprwjp.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163txfhmimf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163alxualza.html

JS:   require.main === module
来源：http://www.sxryk.cn/163nxnoddfp.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163gllbolha.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163lsuanzqb.html

Go:   func main()
来源：http://www.aibaodan.cn/163tnngdrmf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163unyexolk.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163xoyjkbzv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163togrqzaq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163bsyarbsh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163sipmzqfn.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ychyhdtu.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lyzuttzd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163vxwkfdse.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163xlnqqawq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ftadbkte.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163jmhzvisc.html

================================================================================
来源：http://www.xuanzx.com/163oxxkhvkw.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163wuvcaydk.html

================================================================================
来源：http://www.xuanzx.com/163rrqrwofg.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163stetvxyk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ynshlqfg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163raevfqvm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163knlvltcc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lpfinmou.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163rowavdnx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163vbcrxjjp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zoaanuxf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163vauymgwd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zeazhrpq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163osdmomfu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ifnknofa.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lttrvjbd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ylcsxour.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163gzshkzbl.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ytkrjiiv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163niubbsly.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163qzxrhwhc.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163exowghvk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163gotacyou.html


<!-- 参考信息 -->