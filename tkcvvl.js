外链999!wailian999！

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163vzbbzykx.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163fbgvdghx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163styiutra.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163aratjakg.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163nicmtzbu.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163fyjenknl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163guaspiqv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163czgcfoky.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lzwrrgfd.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163botxxdoo.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163gegyawuu.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163cqjfwogz.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163qzlifvta.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163atsqklda.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163sxyryfqr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163otbchene.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ogtaumtz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163usqcqgdg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bewwhlww.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163imiliwkb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163afoevqto.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jyoulzdi.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wtdjfavx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wusanoic.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163jranpnzw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163wpyknudh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163fedhfszw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163yggttgem.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163vcdpkrul.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163kbfdrbhy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zwvaqxgc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163nbloiqhy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163gxlwdgay.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lqzpqtyu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163yqshemgp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163cgueegtm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163lnixtwbw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163skqizqhh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163nncxwipy.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ouwdayhd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163wlgizqwx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163oivwidtf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bfyllaty.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ephexkxw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163dclrnwfr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ibhxadoh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163tqoyrnvy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163heexwynw.html

================================================================================
来源：http://www.sxryk.cn/163oztdqllq.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163tgynvgpl.html

================================================================================
来源：http://www.sxryk.cn/163ihmqpwbe.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163halawpgw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163fngwnret.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163mebavtin.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hhtlvmiq.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zbpcimni.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163fcnzuddc.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163fgojyvuv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163njhwryts.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163avblfnbr.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163iteqsyux.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163dzkakqnj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163jwfoumaq.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tsodmima.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hdbqxnin.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zvveghjt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yuoglplx.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163dajvucec.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163xljmkhud.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163zfhzllbp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hbwrnvra.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163fjazplum.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dnkatjtn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163viprmjtr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163jlsfvlcg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jqxrhlhu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163unanagry.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163rumoexrb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163cvujzhfu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163pryqiael.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163qlwrbuzd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163scatsvae.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jjzpsjjx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163jwgclmmh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yjhdmjdy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163anphskws.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163maugsdtn.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163qgeitdmz.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163zcpweltx.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163iikonwkv.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nvnehtnj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rbwrpptv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163gcxwufrj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163lhzmjgsb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163gzgahhkn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163yxbmstqv.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163aeezbfid.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163yhdpqauq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ulywmmde.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pyqnthyc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163afindyxh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163sndlfdmv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163anjbckjk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163yjeiovvx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163fldbckeh.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163hquktwmk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wvpfslaf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163nghdbtgh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cuhjasoj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163weqrpdxb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163vzafskiu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163svcehdub.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163isfugqsp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163qvyswvmy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ctokmxgw.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163buhzlbjc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xdqsjmpd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wlnxbgit.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pzkpqxex.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163svixvmum.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163udhevmdg.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163fnglunpw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163imfvgdon.html

================================================================================
来源：http://www.xuanzx.com/163lgxzfrfw.html

L. 网络请求
来源：http://www.xuanzx.com/163jxultbsq.html

================================================================================
来源：http://www.aibaodan.cn/163qyqgrtoc.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163eixhumiy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ugfeukyp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163lknygtnx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ovjvrawg.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163jrigjhzp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163goxllzob.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163awjnegxx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163gxxoarrk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163vmtgzopb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163kuumcnvh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163fhlruzzn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163zxeyjqtx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163atsablqf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zmszgpzg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163soedtvtk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163otsmlcrp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ecfhdhug.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163tfidbzkd.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163tbmsggod.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163xkivqwfd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163sbvydwos.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qceguorv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ofetfhtu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163vqcqnsqu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163bvinafwi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163dywnapdf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163oylakutb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163apiatiez.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163tigpxuis.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163fayzvmvk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mcmqfasp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jaovgfar.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163kcisfizz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163olbofzud.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163xjvlwqgx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163eujeftgo.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163uzndkerb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ndqhvhaw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163afbybnxr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163oekmaeoq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163iihepsuo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163hffdxesj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163qtaupixz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163fphfidng.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163uomvkbvl.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163eaqenrpe.html

Py:   resp.json()
来源：http://www.sxryk.cn/163wkfxovwp.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163yurlsnsx.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163vfqxfsnc.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163tsluaigr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163jnuysdtm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163xlrmavsl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163hhmochhn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ujpvxukj.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163pgumxccq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163bsnizfks.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ytnjaewt.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vaiqnpfc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zldbrmvj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163vwpfllcs.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163hnrxcfkd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163tlttlzyx.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qkjpolfw.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163dbgobdyz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163khizgcvb.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163awoimnbu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kmkuylxa.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163glrvcuzm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163aeulxugy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qiyevkht.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163onbbhrpu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163bvvbbvya.html

================================================================================
来源：http://www.xuanzx.com/163piznmomp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163nrgyynds.html

================================================================================
来源：http://www.xuanzx.com/163iyilbdxq.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ifgasqdm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163lunfrmqk.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163lobcetoa.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nqmrvato.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yyjudwiv.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163tsmfsjjz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163uyfsbydt.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163grkzrzdk.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163bpauhkxm.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163bekwocmi.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163qyrwzdsv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163pmhasobb.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163yxoxotgr.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163jexvtjya.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163tbgadcfl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163dagpzwhb.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163wpunivqq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qamvfpwi.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lhycrnzn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ifzpgltu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163zsfnnbzn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163sdtvnswy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ikwzexkk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163pbtzvcip.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163vuqzqvvw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163wwckbyso.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163oinxkjyp.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ndzjrfoh.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163sieqlmgi.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163auneeuxk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jrgfglzw.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163xwzjwbpc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163qbychbjs.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dslawmcl.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ozyntyar.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163aqciripn.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163njahnawr.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163szdusgsn.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jubjxylo.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163irqfgxoo.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mrkwkcmm.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mlaksjlr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163booxmfoy.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ugmfhqmr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163tqttjkmd.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xtmcwwes.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163phonpaut.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163qnfcsdsm.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163zpaznfkg.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163loxrfmtk.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163rwiojayf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163gacztlad.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163extjcvex.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163dxvnobvt.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163epvsroma.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163fpmhexls.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163idmedyhh.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ysnlkcjl.html

TS:   require.main === module
来源：http://www.xuanzx.com/163idytynpk.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163pvrjtgja.html

Go:   func main()
来源：http://www.xuanzx.com/163rzyrejwg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163xotzakym.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xgljgcdy.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mymtyyuz.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163uusqfsdj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163bygtxvxi.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bnbjligs.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163edoctknf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163awixnpux.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163odrlmouw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163rzraozkp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163pcsiposs.html

================================================================================
来源：http://www.xuanzx.com/163oarcnmuk.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163aszdktwz.html

================================================================================
来源：http://www.xuanzx.com/163vpxswnph.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ptalvouw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163jcsnnnhy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163wejaqvqs.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163nurjjuci.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rvxuvyve.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163owitzofq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163uqunynsc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163uwjjzbxz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163wlbxrisp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163jdsyfrjg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fukeebtq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163zpwwvtzp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163szcbdaja.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nfvxsiai.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163kqdwunqh.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163miiropqk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ndsupmeu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163deomvfjt.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163rvpzbkyq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163wraueiwn.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wfxhnapi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mftkonce.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gumvvhrj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ioopqneu.html


<!-- 参考信息 -->