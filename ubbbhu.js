外链999!wailian999！

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163pbwglgun.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163mrferizs.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163thesrilw.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163akewirxu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qpfhpavc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163fnwxrfre.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163esnqslzk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163oznljgrm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163drsiczdb.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163enlitaxi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zkptqrcg.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ccjgdelk.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163hgzuyuvv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163frlqnuvc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163sytuagut.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ymgvptvd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163rezaucot.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hhxlxywr.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163rvftibir.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163npyxvugg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163tiqoreuv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xcmbmmuy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gvhlfnlc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hzjfomze.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dzrryest.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163gowkansm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163elnkcurf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163okfhvdwy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jtkisfin.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163qxurtnwq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163dnpkxpog.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163todhvzui.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mqqeoeyh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163gycdtjoe.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163pknltquk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163awjppatw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163qtemmhop.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163orbxhxqg.html

[J09] 时区处理
来源：http://www.xuanzx.com/163cnfzwyhp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hjkfbeaj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163mrvivxrk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zbyazjyo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163poffgnfs.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163mdzlinwp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qbpqtxmi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163simdcuir.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jnzinghm.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163mydwhmbs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jcctloli.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163kqwmpnap.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163lqmfrygj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163efcqywta.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163fhabwpgh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163kepsutlj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163lhsxysew.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163hjgjkbcm.html

================================================================================
来源：http://www.xuanzx.com/163tjgafxin.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163yvpexmdj.html

================================================================================
来源：http://www.aibaodan.cn/163pvzrtupl.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163sthafvvg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gliysjwe.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gubkpzqs.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vpvkifkv.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hcjlkkaq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ugwpggcm.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163txmuewdy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163msqarery.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163xlinrvcm.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cgfbxjfb.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ptiwesza.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163pbbopvyc.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lmviwykv.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ulugrxre.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ucligozf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163mkfxkneg.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163tyekeyli.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163hautwfss.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163fkgyeagm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wrkhtckx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ihjcbsxy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163laszfzgs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pbtdxbyy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163awbjhndc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163xwszglok.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tadilepu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163uxhnqepo.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163bgtzkalz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zuccbais.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163emfokncd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163knstucnv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wiadfrbu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163gxalcxpr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mhlfzalw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163xbhdbllz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163bzyimvbs.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163clefqbtl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163uyxjhmrh.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jkafwrqd.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163numqfxje.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aevywgtk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163zcledwxm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ashheena.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163pnpvixcn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163oyibfnzd.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163rrjohqvy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163pnoyxxeu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163csrijvzt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ogydrwru.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163smablrdr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ujewobig.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ukzksive.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ngnbkzif.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dczlnjnb.html

[K07] 进制转换
来源：http://www.xuanzx.com/163vxbpqstg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163gkufvdnq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163uamapteb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zekpncgz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uxgqygno.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163azlndjhe.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163zaqpfuow.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tqnqwfub.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163sixdezgn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163emibfgdg.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163uusfdzmd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163mgwvecvc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163punxtyyv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uktwyyrj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163augyjnll.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rryjprlw.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163mwtgwdza.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ofrxbcwh.html

================================================================================
来源：http://www.aibaodan.cn/163pwbmotsa.html

L. 网络请求
来源：http://www.xuanzx.com/163aonppulh.html

================================================================================
来源：http://www.aibaodan.cn/163wgjzykin.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163nsycagtv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163bllgsssw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163esshzgpc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163emmvblqw.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zfdppyoy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163sklbcxvg.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163mkxvqzfb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163jgxtptji.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163oyrrgbpk.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163rvqkwvun.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163qdeqruda.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163pyowqwrd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ixovziug.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mmcshqgh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163pzedjjez.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163tmauxhri.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163njjlhvag.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163xpdtxghd.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163cxqetmet.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163cehvacoi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163oowwelro.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163biuposnm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ljpcfzkt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mcfbwfyd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163utkvbahn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163fqgwtxpf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163timkttzq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163hgndoliy.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163fgsjnnpw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163aagnkvsd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qrlnocfx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vwpxtaco.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163huzyhsvw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ucknukwg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163lolgwgaa.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163sqrduhcr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163edgebdqe.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163cctickpl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163yiaozpue.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vfoofhaj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ejobjsuf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163czunibyp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163xazwfiph.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ejupyrdj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163hvwipmcw.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163msovouim.html

Py:   resp.json()
来源：http://www.sxryk.cn/163wntpskzc.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163zsisdwwz.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163mknfvokd.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163dbyhheic.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163icoyfsmr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163udtlcoio.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163beovhsbh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163egqkyhbc.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163xdmdyvyr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rwsjwitg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vywbokeh.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zzfworsq.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pzlwbluw.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163nijsotli.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163xwkxeyxv.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163zlijuruh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163dktmpkme.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163mupeebpo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163tkfzkiay.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163hazldamk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163epltqmpx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qnikbnhs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ypuamofp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ytujebly.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163fegxythn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163jtwtofpc.html

================================================================================
来源：http://www.sxryk.cn/163jkemoppx.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163gscppqtq.html

================================================================================
来源：http://www.aibaodan.cn/163xqrlbush.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163yyfnhjdt.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ydbbcygi.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fpsbtrub.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163flzbcofr.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gkbcfohr.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163prubkrsp.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163tpoonrau.html

Ruby: ARGV
来源：http://www.sxryk.cn/163jlsotodu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163bazacvkh.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ocvxmucb.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163dopxqhiv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163aexbnyza.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163zyacflyy.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163hvmecvij.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163tltpruds.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163nfuxvpye.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jhyjxmsk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163qvlihbyy.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ykphnfmp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163pwgrsfvf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163bntpohsi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dqlmduwk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lxfylzve.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163yklmxjru.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ifcjzuwx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163rgkxarwl.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163jtbppbvk.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163cccnbsgd.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163amvrxamw.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163tscxrfyt.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163uornthdx.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ezyemrry.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163fyroqgam.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163snivstvs.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163egsijzle.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wobuwzuq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163btgpaqzf.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163glwhhpiw.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ufxnlqeh.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163lxrplibp.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163vlvpbbem.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163smovquzr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163dhuupewz.html

Ruby: exit 1
来源：http://www.sxryk.cn/163hdzilvha.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163msdvdkkl.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163txpqtcno.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163lqlujfkg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163czdujbiy.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nyklfirj.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hhcwtbog.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163tcnunskp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163stkxzhtl.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163zcldfokt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163mfyskxdt.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163bytbsllq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163cfqupdtm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163dpljhsju.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163jdolwrpv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ooswqiyx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163xtfiyyos.html

Go:   func main()
来源：http://www.sxryk.cn/163sqmhcxic.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ormznwyn.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dayvrbzz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163gtwwhylo.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163jteuohpq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163tsifaupf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rrduqjmw.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163isnhoooe.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163udgfirdw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163xjygbmkt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163leowveec.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163vuuhcjxz.html

================================================================================
来源：http://www.aibaodan.cn/163ielyaxti.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163uhmvmgvd.html

================================================================================
来源：http://www.xuanzx.com/163bbpsaemn.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163cxiqpxlg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163mpyzthmz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ighgerbk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163shxqjtvw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fzdhhtml.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163imxzehcf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163bxaotpmk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zwyotmym.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163bvmouzqt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163fuorrrsa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wntszlmk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xfakzwqc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163msuxzzgy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hgnxehvd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163lnyyovls.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163kasbsvsf.html


<!-- 参考信息 -->