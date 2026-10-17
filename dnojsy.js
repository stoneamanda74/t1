外链999!wailian999！

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wsgsucqx.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kzcdllqp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163wxeskusq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163yyachesu.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ldclbbfi.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163yzwlrbsa.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163umxbnfep.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ffdfdsmc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163anjduzkc.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163dgpfglyx.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jptpnghr.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163bjciarqb.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lqtwtnab.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uatgajds.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163chaybiuq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ndkodemb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rcmxnran.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163sdfjceox.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163dkgsbryv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ranmajop.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rnejhzjm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163myrrcekq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163adswcujo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163muxpidjd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gpupqckd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vmbeybfd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163kvjulwlw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vawmadcw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163zgvjrksi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xwuabkrz.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163haxabipa.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163moxapkdg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163fhivbhon.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fyqlhvgp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xxedypby.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163auosdjhv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jqjdgewj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163dbyoqztd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ulgdtwtp.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163upfxonvn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163yvoeznng.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163xcpqnxee.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163osgzjzxb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163dbqpqkjn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163pgugeoaj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163iswpcltr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163rvgmlbuk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163psjfommg.html

================================================================================
来源：http://www.sxryk.cn/163wzsfeqdq.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163igdqqxaw.html

================================================================================
来源：http://www.sxryk.cn/163vigalrbp.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163egujemkw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163dknxxdwn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163cvzajkxm.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nirjbabi.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163dgtgxkom.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163cnwlqdav.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lxpnsict.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vzyvdkup.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163nfctvoef.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163obhnmpjr.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ggidrqsi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163elctyrix.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dvzyjsvh.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163sqokvikl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163tcnogolh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ybbedcfo.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163qygzypnw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163hpsuonhp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163iglqpigc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kqhfkcyu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yasajhho.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163gtrsvcmv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mjdwgqgj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163smmplkzw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163lhwkvidq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163lgtpqgex.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hlawztkr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163usxdbjjk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163dqxcylue.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ihzyblnf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dnnnkvif.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sznvdkju.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163misspwnn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qqtrljjs.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ejdtdicd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163xdjcqmej.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163buuzbbsp.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163mtlkuzci.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163exrfgihu.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ypjvbdip.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qsavpnlj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163djufhhfc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163xvuqspbw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163hknvhmad.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kytjfcgs.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163zozreknb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hclqhlwf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lbxoziwz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xjsehnce.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kmotbcug.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163pjmthwir.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163fhrzroxu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163fhsuughf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163lnhpbsux.html

[K07] 进制转换
来源：http://www.sxryk.cn/163oiqqymyj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ifzsgiap.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163hohmgopv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uaxchseg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zwcockuq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163apjyptfy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163fnxknpas.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163zfivbwek.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163fzbqrmmt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163lfffbygt.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163duuucuka.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163rpxrlseq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uovkremt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xplgexmv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tbjycbdd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163aduuvheh.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tapkwvcj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163snbmrfgb.html

================================================================================
来源：http://www.sxryk.cn/163xgidpwjb.html

L. 网络请求
来源：http://www.aibaodan.cn/163iexnrcsy.html

================================================================================
来源：http://www.sxryk.cn/163tkhrqqdb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163vaycqgjf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vkeydaou.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163huzfpmak.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163gxwcnmyd.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163iinzrsiz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163cosvnife.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163aactbfxm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163gzpyasjv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163mmcbphoz.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163xvswgrjb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ozcfaasj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ccxssnpt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163btyvmmtw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dgshfhgw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163dftcxnma.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xmfwvpnd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163xmrlggrq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163zcgqkwxy.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163xtwkhloc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ckpbqgqc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163lefqqzdo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zqtienaa.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163peqnakkc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163zatljsqm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163meqakuwh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163nfrlapbz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163yldpegrp.html

[L04] 设置超时
来源：http://www.xuanzx.com/163wlkcbhqx.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ibsdzvbe.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163tgrkpgbt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cekumrpe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qycgvdge.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163mqzzbgga.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163vthbxrvk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ddqkqcaw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163dasevise.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163blijuwdr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163giclbrpm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163deyubbav.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hjfpnrqf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wdbqkare.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163rydnwftv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163gqukywii.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163hvwkcbrj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163qplqwhro.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163yyetpcau.html

Py:   resp.json()
来源：http://www.sxryk.cn/163vjwbbwkd.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163hatrobsy.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ttgbikup.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163fzfrhfvs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163buicprfc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163rlgacflw.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163leyfxkwj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163iegfbxdw.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163bnmrcpns.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163dizcbags.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xtgjvkoc.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jledhxxm.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xoeufosv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163tnorjhmg.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163zxwxzqac.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ktjmjcxq.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163iifoztob.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163tqnpkttd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163orcxwdml.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163bnuxbnox.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qhectbnr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ahjmqssg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ehaqaoho.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163cdhoddkq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163kqbgawjk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ireugwvt.html

================================================================================
来源：http://www.xuanzx.com/163spjdfulu.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163fuixealc.html

================================================================================
来源：http://www.xuanzx.com/163wxwtxgji.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163bnohekbn.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163svykeddx.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163yzaxbabr.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dugpsnts.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qrspadem.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163bnzjcppj.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163lszgblcm.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ntfaslpo.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163bonmcqii.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ktkpzxpk.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lydkgnka.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163olmkhxah.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163tjfvhzap.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163nbdnzqni.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163shoexjlw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163idoctujw.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ggiectkb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vyfgkezw.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uijdxmcc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163grlvboxc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163bxcxscwd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hdpyppwu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jysyukha.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wqwszuhq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163jzohivhc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ekuxayhx.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qbfemhsu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163rfxnrprw.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163sbsusfmg.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163rprcmjed.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163kdxofben.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163mqplraby.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pjzklvvc.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163azxwwbpi.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163lyndansk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163djrazfqb.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qzcjvkyl.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ftxefyen.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163vognqtfg.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163paqmqzwf.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163svxudiwh.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163nltpofdh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163pukdxhlg.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163rdznblke.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163wggrqhta.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163mjaduhte.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163uxacmmwu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163hoztenaf.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163toqkewny.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163cgpphpli.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vmcxbycx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lhonmgjr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163prpqirga.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ppmbppco.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zuhttgbl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163plziadet.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163dgdzpgeo.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163uwimeomp.html

TS:   require.main === module
来源：http://www.xuanzx.com/163csfxqusl.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163weezvizg.html

Go:   func main()
来源：http://www.aibaodan.cn/163mqyxwsxs.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bustzwhq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ynbolozd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xtyceogr.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fyfowhnh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163vgrctvzg.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uzvgojor.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163desirqmh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163lrswswri.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163iqbgwikq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qfextpvg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163wjyehdbs.html

================================================================================
来源：http://www.sxryk.cn/163jvstgpfe.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zoepkusv.html

================================================================================
来源：http://www.xuanzx.com/163fdobsldh.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163llyqesks.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163igafpwfz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163agfptqxp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163gflxbmwe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vaobcfpy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163mvvwggex.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rantnnxt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163edqwyana.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163cqplcfei.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163fdwwrfzj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163htcafnrr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163mcwwmxla.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163scffitwq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163aawridci.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ckkotpim.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163htjhvsaa.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163byngqsgn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zwqgecsl.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163lgvvrrkw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dkhmeaib.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163nmxjkwsz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163evrqczul.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163udazdvcm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163jjgztsak.html


<!-- 参考信息 -->