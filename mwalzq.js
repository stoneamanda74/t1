外链999!wailian999！

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163kwrqmhat.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ilvquglf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pssxaxyu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163eszjbrps.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163foflvlgy.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dmcvwwtf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163sqkrmxvn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163aewnfoal.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163owqxcmvb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163uytaycgy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163bcdqnuil.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163kmhiyokz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163mqwgptas.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163vikswtzh.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xdbfajhs.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163dogpabmb.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163qoczevgh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nbchpjds.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163djwzlwum.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xdigtmzw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zxnqeulo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163aiufgvdc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163oqyptdgp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lebkffoy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wuljxinu.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163hssgrqqv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163mfdqepcw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vabtahpz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163mhaksqsl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163cucbzozh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163pwmtdbnx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mrilyyem.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ypmtnpes.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163czpflsmu.html

[J09] 时区处理
来源：http://www.sxryk.cn/163mvumrypb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163hllbpeue.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163kjsucvyo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163actefcuf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ikcvkump.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163dstyzemz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163wttvoitn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zibzpwsq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ixqjwfmq.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163mxewjbpq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163dbnnigve.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163fwdkldqm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ohrlmvhv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163knhvxnaq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163pjkgvbja.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163pdueotaw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163uxbxbqwc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163yxanuyyo.html

================================================================================
来源：http://www.sxryk.cn/163scyxatil.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163qhqursmd.html

================================================================================
来源：http://www.aibaodan.cn/163jszaexjk.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163oqlcqdfh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gmtsamyl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163nkyyefip.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fsasgmes.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fqstijnv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xkrioypr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163mitywuqt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163zrmdeuwa.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163cklkhrbq.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163wvztpubh.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rxekbgkh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nyvoghzd.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163smgotyzz.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163twxqpacz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163gyfkqycv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fvblzbgn.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163xtfdvstr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163gufyneet.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163maefbuep.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kwgmiblm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163moaucgoj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ggmbcreq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wwkldvkn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163lzbnepad.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163msbeyxjw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fxslsnqu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jfpmdwus.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163zctzamyy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163khcqofao.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163etcrpdaa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ohgikwfj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163luquespm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163pjmplkdu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kfhiifoa.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163jlmbnzkp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163zlldvlhu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163bvroirdz.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163qoezwmyi.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163zahumpcq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ffiaqjgc.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fgpwaiqs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163lqqanvsh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163kbhsiciu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163smfnrfsx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vwfuzfjm.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163nsttobrt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163gcwmsrqx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163kvoflong.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163sqyvzult.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163sgaeajpj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163xiorlcmw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163yvgtafda.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163atyebmyk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163whnzupoc.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ythbcrad.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163bnfuyzep.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163mjyhwgia.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cexrpdkp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tbjfgcxo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163mjilcdab.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163othvwcxt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ymrixwga.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163rlvpiwos.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163qhyniyuk.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163fyxjkdjo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163amdubcgq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bssnecoe.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ddhwrdum.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163zivjxucj.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ywcnzwvn.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163zhtcavyr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163gfocfhtm.html

================================================================================
来源：http://www.sxryk.cn/163rtcrdctg.html

L. 网络请求
来源：http://www.xuanzx.com/163poohqdxr.html

================================================================================
来源：http://www.aibaodan.cn/163braaobhw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163mkrsgbrs.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163qigpxsck.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163qrdcspyw.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ibrztwyh.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163brfopine.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163dzhqixhn.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ictucrhi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163flfshtfo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163titpzfon.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163vwsakemk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163wrikmsng.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qakjuoec.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qsrubory.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163nbefutbr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jzzfococ.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rvcgjgcf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163grswybvc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163deragijj.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163nbvorbdu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163gexsqevp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zqcqlfio.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qqszurtc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fclpzjjo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163okttiowj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163enpzvook.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ehmgtvro.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163hiskdups.html

[L04] 设置超时
来源：http://www.xuanzx.com/163lbwosrwi.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163rlivackw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163tsvpbcla.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163yrtrobhe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hsntzxgm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163btzkauds.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ngptppjt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163yicteycb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163udfafqtr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163dfmycwhe.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163futhqzdf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ocmvmjli.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qipanqsn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ardffiga.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163sdpafzny.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163kkfrggto.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gngpeocq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163puhucuxg.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163kyzyqcwr.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163rltdhkjc.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163uuryfxnq.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163xitzyykh.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163eyfvbrqr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163uhxwhroc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xozwpfpz.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163tiwpvflr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163pujzhfyw.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163buzfdimk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163rjlrtawz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hvqordsp.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163avriixrs.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nbdmmedu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163klmettko.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163sjlfoobt.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163hfjfywrc.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163vxipacpi.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163wkigyzbd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163raohymnv.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163vbrxitjq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mprtqwjp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163uzofqrxt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163dnkuiitg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163tbkvhlaa.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163shbjuhlc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163oglgczbg.html

================================================================================
来源：http://www.sxryk.cn/163rylplbnr.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jjbjozsl.html

================================================================================
来源：http://www.aibaodan.cn/163lhtjunbp.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163kdyqymjv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163pftvsjms.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163tpocldea.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mffqkcii.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jsgoneae.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163eosyliri.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163itktkmoj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jtorfwpj.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163mybrutlr.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163uuavdkhs.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163pkogbqrb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163syfgsbab.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xodlbkpr.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163mtvzlkvt.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163rxhdoepo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163apnotcqf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163vdwntgao.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163odjunilh.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163uysypojf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163tleybuoc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163yshxnjqe.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wgmldodb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163abnfeamp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163zxhvitrv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163zhdghkem.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ecqcakpo.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163allrttrx.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163qtymfcqt.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163wxnrdzps.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163uironhsa.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ussnavia.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163uymmrmnp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ksswmbgf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163hdnjsjrk.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163cmdqhnxl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163zwvxqygx.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zeedblkt.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163lbekhrxn.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163wddfhduq.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163mxgkhiqg.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163uckxdfth.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kzafugzo.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ozgtmpqo.html

Ruby: exit 1
来源：http://www.sxryk.cn/163uthrijsi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163cgdvosxn.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163pcyqmqmq.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ebrnvuwq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163eojuzcjc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163hamdyluq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163klqxrufg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163sljreklf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qdyckmyg.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163aipezwxe.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163sikvqsiy.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163adcdyplk.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163luctpfvl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163gubkrsea.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ewrwucre.html

TS:   require.main === module
来源：http://www.sxryk.cn/163jvtkfpfs.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163kllffbjh.html

Go:   func main()
来源：http://www.sxryk.cn/163pavnpdff.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fdnnedhu.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163kjclilgq.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ndanxnab.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163uqeoujwl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163fcuucfpg.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wvidqfld.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163pjuszlui.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163meylqugi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163vddogiib.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wqjyngrc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163mmcqowty.html

================================================================================
来源：http://www.aibaodan.cn/163tcobhprh.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ptbbcwes.html

================================================================================
来源：http://www.sxryk.cn/163rzjzxmwv.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163vblygnor.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163plvdsohb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dhuyjhtr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163arotaxkl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wdhcmgnz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163lgpaxwnf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163vsbtbgtp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163lbutiomk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hrrdwyik.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163pvfrzbhz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163szolnyhc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163jrmihnau.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ifxzrjps.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ptvbqwvo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163gzaiiywo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163flfqrepg.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163biookqgy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163kkjlemvl.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163twtewvni.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163zktxgkgd.html


<!-- 参考信息 -->