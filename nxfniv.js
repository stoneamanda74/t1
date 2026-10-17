外链999!wailian999！

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wwanayhi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163egtszett.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163htylxyka.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163yhmilfhc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163xrkbwtkg.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163govxrjer.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163mkzupyik.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163gwhxletc.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ghocpcfn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163bmkpleaj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gaviexkx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163bkkqygmj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163sjkvxbsv.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163kbixghmm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ldixdpxd.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163wwkwskga.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163pvttsltu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163memvxnxb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163bxbxfync.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wzffpifv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hduxounm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163clutpkmc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ytddgjun.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163snmsiddl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163szpzbbvu.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163goqscggx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163zrbqzeru.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zycmwfnf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ejfxdgfi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163hrtjdfuh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163giselmci.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163dkdwbunm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163bygvaegx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ydccrrkm.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163pgzhskqs.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163aqejuovo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163khovmzbb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wfleplbx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wbzlzsap.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163iweaoyrf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163crjrkgzr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163leaoknid.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163hufluylk.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zeayqftr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163pgcyufhp.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mlnegjkj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163mifnitqc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ctlwddde.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163xdswaugm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163rmiusntg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163zpxhtkvu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163vimzpefi.html

================================================================================
来源：http://www.xuanzx.com/163sqqivgpz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ideufgbb.html

================================================================================
来源：http://www.xuanzx.com/163tshrbfhg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hhtqulxl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ssazzpqw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hqhyminb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ralhvmfq.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lgdyxyja.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163bjgjcxtq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163edrodhce.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163slfzpjfh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163dvhdrjvq.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163xwcwxapf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163aiuggqck.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163oetmqjox.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163dkshearf.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163scfjrqwj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163mtxjvqfz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kvcndhxn.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163leocjrpn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zjfmrjzq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163hiszanho.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vlxpnyjb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ohtgoork.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mzrwmqol.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xncxetmb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163irjbiect.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163rcbrpiaf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fhvnqxqp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163bcxqherz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163wzsksagv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ecwsdocf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163hqiwaheb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hhrnaaei.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zyucrhrq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rdufriij.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ofllwjqu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163egfzlezh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163wkpdlnxg.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163hlwybclu.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163fzgqiwle.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163wnitamxd.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163uplvrmdl.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163arcwvkpx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jukaatez.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163uqipxgmf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ppqqfpbw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163dbpnpanj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bidgqvnm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163yoxfiomc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vrooauoj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hrscvuem.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mlkfdalb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163abvnduzr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ttbmhxnc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163mzemenqg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163kdzpaxyb.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163yzacjwwz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163qxsevjkj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ufbnpvmj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rvrippfw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nfulaqkf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163uwjtmpwl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ymooxdsx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ypenvhjv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163cgzzhuus.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163dbmojqtj.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163wpmjydjp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163tzwkvfwe.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ypqpxjwp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163piiemzsp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163eskdxuok.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163pjwnuxob.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163fnnriyfx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163aopvoajt.html

================================================================================
来源：http://www.xuanzx.com/163rdvumocn.html

L. 网络请求
来源：http://www.aibaodan.cn/163twvpjhjl.html

================================================================================
来源：http://www.sxryk.cn/163aswjlstn.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163jzlafqte.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163otdnjnil.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163eizhxppd.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163dqvigtjc.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zdsupfud.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163oxnvnbbf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163pnffsbce.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163bdkizuss.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vprjioqt.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163mlaxspoz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163vyfnwoyi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163kchpenkt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zqgrttwc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xkbsypxw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163unhlebpf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163racbvjnk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163icfbpzrc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163pkonzebe.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163hvlspbtv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163wrlrpqyc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163bfdihgmf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xndvaull.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rjhuqhrt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163xqimsttp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163wzhpavuy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163oxdeoxjr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163nazhbcdl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163jagohbwx.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163awmabudj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163jgahwhzj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qthmgaoo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163laqgvxhm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163elusvmje.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163swfmyzqo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163fqpsmtvq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163xjbqwwtx.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163wjgaqrpk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163mjizdxtc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163shndglba.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163waehuoah.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163iqalvnsh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163kngiidcf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163rfelaijz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ksbvadss.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163qhpvwvko.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163wpqrybyx.html

Py:   resp.json()
来源：http://www.sxryk.cn/163dkcxfveg.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163clhhzaak.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163hepsnckx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163fcqiyrbj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163cvlmxkag.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163nrqnkdtr.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163umoujwrj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ykciflzd.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163gybmrbea.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163rvthpmld.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163kzhlmzku.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xzrynuol.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rwsuvolj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163khbkkaoz.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163cerqwvvf.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163xecqmbdw.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163legzzthz.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163tzmhsgos.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163gokltyop.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163kbvomcvu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bqysiuqx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vbcdvgsd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163xetjczaf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163kjjokvsb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163tpovokdz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163rxplbysa.html

================================================================================
来源：http://www.aibaodan.cn/163sdafytyx.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ngsnlwaa.html

================================================================================
来源：http://www.aibaodan.cn/163wbblsaaj.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163czbhchnc.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163gfcauwtl.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ymkojbbr.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163rrsbdfxd.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163aeywqkge.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ixumfxpk.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163nghbtkcs.html

Ruby: ARGV
来源：http://www.sxryk.cn/163fopkenfw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163foajoalf.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163virmqxhp.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ybouqmjg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163mffqavac.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ypqqnplv.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163fpicxqke.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163tptlilou.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163cqbwmwmb.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163crpufpuy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ubgiuegi.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163fwuxigoo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163julfsxju.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163sdpdmcls.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163matpjohe.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hoxuhpcs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ueiflvac.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163sjuoomuq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163aidnxhwz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163sjjaeryo.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163oxtatkly.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163kpedxbhr.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163gnlcjicn.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163mphkouwj.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ttmayreu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ghhdpjnj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163mnzopqsg.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ewnasiph.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163mispcmww.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ompvxcjc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ftpctwwq.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163bdgswtag.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ijufosuf.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163pzqelikv.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163amlpjofq.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wxcjdlcd.html

Ruby: exit 1
来源：http://www.sxryk.cn/163lwycneyn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163gfgxrekl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lzbykxyd.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gfpubkzb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163tmpzydzx.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163cfbcjekm.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163qxxntito.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163vytekmzx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163kqdlofwo.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163guttecqi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163lruivwkm.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zmzuzvbx.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163oebdvuvp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163nmpklhcu.html

JS:   require.main === module
来源：http://www.xuanzx.com/163gecgijve.html

TS:   require.main === module
来源：http://www.xuanzx.com/163xbomluuy.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163tcnkxczk.html

Go:   func main()
来源：http://www.xuanzx.com/163ppvaliax.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163wnschfaw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163hdmikzep.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163kzskfmex.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163gkywwccn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163lnlkocif.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163mioqunhh.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dcvqlhln.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rnliqakn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163muyqymcb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163aqespfnz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163nxjrtvua.html

================================================================================
来源：http://www.aibaodan.cn/163jfybefqe.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163lgkuueyd.html

================================================================================
来源：http://www.xuanzx.com/163rkzkiqwr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ooauwcas.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163azmvgyjl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163jdjdzzlm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163sonxmpaa.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mewvmxyq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163mxsbzyoe.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163dncxhxor.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163epqurlar.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ynkrtviw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163nmnvoglz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lkiocofj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163sjfhtqye.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dlvalopq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kcfqbtaa.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163dbippwjs.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163kexcoysi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163huiybdhg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163lkmbbztj.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163hikpppjk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163tfvcrxjr.html


<!-- 参考信息 -->