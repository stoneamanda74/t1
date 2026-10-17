外链999!wailian999！

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163cqpejtlo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163jlmquolp.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163hbvgwjvg.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vfzvijbd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163uuvteyof.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kxrkqbyb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jfyvtxyn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163jjoparsk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ilszphav.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xgijimcq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163keluvdvx.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163houpkszi.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163yjswdfcz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163lwibmhec.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163temrtamh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163izlyviup.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wrrotids.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163dwahdiro.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cwpkrdyv.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163dkgahivp.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163esbripfh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163deenttgg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vfumatwy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163veswlaqw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hynohium.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ktiqtqlr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163rkpcqfft.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xkagedpo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ainhzpmk.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163yptdvijl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163oayazvcp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163sfdugpoc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bdvixdgl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163yigbtofj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163csihaiiv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qunhaete.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163enpaexeq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163slriquqt.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ihxucath.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163sdvsiypi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163jhxligdm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163cnpsjimo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163islleequ.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163verxwulg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163rfguiolb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163cmedibqr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163qisovdhq.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163fzwwzprs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nshlttom.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163clvhzvlt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ssitkcdy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163lrxvmjvo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qbxmuszr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163azchyhcf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kkrwwrsh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163edkzovah.html

================================================================================
来源：http://www.xuanzx.com/163hoclrbut.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163fcfqifnh.html

================================================================================
来源：http://www.sxryk.cn/163ddongfsd.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163npgtebon.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163juzqzfhb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163sadzlnkb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ozjhrxjb.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tpozuwlw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163iyifduby.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163repatesc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163qzmjeqwi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163sxfvmvrc.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163zvquqswm.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pvyzhbcp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163lhjfeaiz.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rganhlop.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jwmvrzwr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163jvvtzxzw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xjfuyadb.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163gcondyfm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163jgprfgik.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163uynnveli.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wdnvhctx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163aqocvzkr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rjqtpokk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163eplxrjpo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163zlxymqqd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163kvovcjso.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163pahsdfql.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163yqkstxky.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163xjhbshhm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163vcfozxoy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163svbzanhj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163eubnnwey.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163yntqtcid.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rirykvam.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tubierjq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163fqvjtxfn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163qocowywq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163sorkdswg.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163qkqlgius.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163mvludmde.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qfcmnigs.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163txmyufba.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163kdazbsgd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163uwuanmgf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163mpujgltg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kgnkbujd.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163nhsbgzqb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hhitpnuv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jrldnnbn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163uzsklaya.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163djjqgvno.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163fbgewmgd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163dadnswuq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163eiquhnzm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vgcipzam.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163yvrleszl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163bglebvue.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163cxvzjygy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163njrlhwad.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gfobbnwq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ifygddrz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163dejlvfry.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tfzehpgp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kndopeyz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163jgyuttol.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163jrkfoils.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163frauxssc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nmqostrt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nrnyltbk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163imoscsno.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163uswsauph.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qvmrcosz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ycagkgtm.html

================================================================================
来源：http://www.xuanzx.com/163jjglgakb.html

L. 网络请求
来源：http://www.aibaodan.cn/163urgrtond.html

================================================================================
来源：http://www.aibaodan.cn/163qniadlei.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163rwauzqsp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163abwrkcnh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163peunlkub.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163bkqirasp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163akmvoqrd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163oulygces.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163mkkwieei.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163xqudrscc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mqgygotu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jbqxqfdm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163xylrwxsg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hvpavrqq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vviuoruo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xmzimrno.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163waicbtyp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163foyeuyve.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163chqjsmwq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163uysltmcd.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163drouioja.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163galeccar.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163khuosiig.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jrtzwwpq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ybiqeegm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163kfwrlimw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163mqcdoqtr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163uojemsuq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ylhcslwl.html

[L04] 设置超时
来源：http://www.xuanzx.com/163kgpzcsfh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163nthplqao.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163tafcfshh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lekauxsd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jyigikdm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163tsjqdqxw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ogokdktj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163njenbqiw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mslagtqk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163kknpnnvs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163zrawmyoi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163tjqojhyq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163imbyvkua.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yrrnnjse.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163hpjfmrwp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163froffmgp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163pqlaoull.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163kxbihfss.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163zjhntsnh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163kfazjlqo.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jhyoggwe.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163tyvjkutr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163rarqwoml.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163bqodtajz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163olhuljon.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wbwrodoa.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163mpiffgaw.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163gjdexbmw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163kaedtbnx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163iefrwzkn.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163eomampli.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163yvtrdbap.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163iafyhwqj.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hzubfvhc.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ocnvynld.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163anfzcmch.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163rgqlrxgh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163gggbvarr.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163allpboob.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tjzfpiex.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zazezylt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163vmnkuytq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163jmotdvxb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163kvahdate.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163cyityvkn.html

================================================================================
来源：http://www.sxryk.cn/163owzaasmp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163orafzhud.html

================================================================================
来源：http://www.sxryk.cn/163ffjqnzbm.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dnkyxrzd.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163tmgmachd.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163wpgzxsth.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hsldbdez.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163emmumffj.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163dganisdw.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163fizbgcsy.html

Ruby: ARGV
来源：http://www.sxryk.cn/163pcvddpwl.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163lhcbxwaz.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163mcfzyyvp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163wibbbzcr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ccudgnqm.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163updqmrdq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163pgfukeqt.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163cbuosgzk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163opvwqulg.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163xmbpeahf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163hmpxquzb.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163zjuspulw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163usslvtrd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163iovanfjs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qnquaqqr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gbozkbuw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lfxjpzap.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163lumkmawj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163pylixrgd.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163uewdbzjf.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dprgjyhi.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163fzhpqukb.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163rasxnccy.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163hfyfiucl.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163mksgdtyj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163efgezrah.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ekobbnwb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qtbmjhps.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163hhyqzhtx.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163fpcfkpbq.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163jzbolccn.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ssxtpiys.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163guwhskmv.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163dvnvftgz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163wfqzhenr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163bpaopetd.html

Ruby: exit 1
来源：http://www.xuanzx.com/163wgsptvwu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ahebsvug.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163sfqbinxo.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163oaftnfzh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163hmcresva.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163fnglknxk.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163fjaakaav.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vebengih.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163zjbiewyd.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163wxrsyfzf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163rrsluwdc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163alctikne.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163owiyodre.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ejxslpnl.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ucvtrffc.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wwtpsuas.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163mkkjgywo.html

Go:   func main()
来源：http://www.xuanzx.com/163xgfwqaar.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163skwxczcs.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163kqmsftcb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163qwzqscle.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qeradstx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163wbohopcf.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163afpldpqx.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fzcadbqm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163meirkmxe.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163jrhxulbz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cjezeekp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163fgfvwdoc.html

================================================================================
来源：http://www.xuanzx.com/163sdisojmd.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163tntzeukm.html

================================================================================
来源：http://www.sxryk.cn/163ogznahqp.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163juxyzmza.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ogappted.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163yklcwbmr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dmkyneni.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hoeuswni.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163fazcgvry.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163qmniojuc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ttngiikt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163wvgdvobe.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163nlbkqknf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gzycyelo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hxuchoxt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dtpnnuwe.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ypguadmi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163wtthefvv.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163expbgpre.html


<!-- 参考信息 -->