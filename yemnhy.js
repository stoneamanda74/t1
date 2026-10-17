外链999!wailian999！

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163gfovwlnp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ummhxtln.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163favksdgu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163dcbuhskf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ahqwqqcm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rlklopmo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mydpeooz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rryhvxtk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163lixivibz.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ymazgmcy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163wcsfvzoh.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163kftbfrrq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ecsiniap.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163asybtynd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163hmatqbgl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163tdavonnv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163rmgphply.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163acscpqba.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163xunpgqju.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163yljuacef.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163jgsgdbxx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qnwzldtk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163shoqhmtb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ytpdehdn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163coqikqvr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163liwyvvhp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163cxrtkhqm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163whbbjzuz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rsexnzbx.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163nbfcefok.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163upsiyobs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163stfqjddm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163qnwsmsxr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163exshuwqv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163xsgeewrv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hgwipfmx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163xvlssczo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ymzjxozv.html

[J09] 时区处理
来源：http://www.xuanzx.com/163hopfajft.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163lezvonje.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ycxcxafd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fsjqolij.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zfbavfcg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163tnzfvgwr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163tyszyhac.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ysnrwsra.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163fpzzznhh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ghrzhlre.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163kkjxahzy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163atdztsat.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163zczutnlo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ztzvxgot.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163cythebvg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163skdnbomc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163rqjzzyyk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163cjpgkfiq.html

================================================================================
来源：http://www.xuanzx.com/163upwfftmm.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163cycunzxm.html

================================================================================
来源：http://www.aibaodan.cn/163asijiebq.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163btjvgxuy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163oumijijn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yrnknikj.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163oswawdxf.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mzmszveb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163reethayu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163fbyxielm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163cjucnmsm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wcjoojfw.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ptwqpzlw.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163pbbnbfdc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163lxlforhq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fkztizkd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mjpavglj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163pwwivngv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163mkehjnez.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163kdjzzbrl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ovrwpmwd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163biasdzct.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163yrlkhrwr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163tosmnhso.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qdpionhs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nkuujiyy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vbwcupmx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163kkdcpctb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163dkdbamoi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163imrtyuly.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qejvmdem.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rafpfzhv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163cjhxkhlh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yoyqmnky.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163oomuaavp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zhkysfnm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bgkkfrze.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163gusnlwgz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ugykxtkq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163rrajgxdz.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qoktxfmk.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163cxzudohg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hywjdvmg.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lwbbpuqh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wzmkqmph.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163vxmefzlu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163tfizuoii.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kahtjvni.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163shjstyht.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163xtcisjga.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jgdflhgd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163tnsnntbc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163coqfvvec.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163npmdudde.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163oeaavhwe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fbrfkcpx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163usetcpjy.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163zfvkahuu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163mhycihjl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163qlximocj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163stsnfazf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jntsxdit.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163xqplsarj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163yocfbawb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qssschst.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163lovslctj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163hlcaglvz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163oshvpqha.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hmtatxzc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gdaigmhg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fvexhucs.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ncwdbuav.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163rsaleqje.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qmqtgdlb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163rllowfhf.html

================================================================================
来源：http://www.aibaodan.cn/163onhsepxe.html

L. 网络请求
来源：http://www.xuanzx.com/163inhhcjki.html

================================================================================
来源：http://www.xuanzx.com/163umjxhvph.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163plxhtwie.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163jijtfvko.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163zkapycnu.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163uhantngb.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163syynjyco.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ucbbyuyk.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hzuqyyzg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ywikprrg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vebkuspv.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163hrpzzcff.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163lkxuxrfm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163evbfferq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163inkdspcx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163yzpqlpku.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163zixjnmhf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ajykruam.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163fatzbdzv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163snwnzsps.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ucrrdgmc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163wndvnzuf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163hbidgddo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rlahkghg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163gmkxrhvc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163gqgtwphi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163yrnkuhxx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163tmbrektq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163fxhprtee.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xkbjofak.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qpohvmyf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kzajuvtw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ozaxtruo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tzzdgjhz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163mujgxusx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163bolhnoke.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ypoaxwkm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163gqishlmn.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hnvkztot.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163jajlejts.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163yueyftjo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163biraiscx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lxmegfwo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163jpeftsju.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163kqoskpfj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163evedipub.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163rhzqxkss.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163dntnxbco.html

Py:   resp.json()
来源：http://www.sxryk.cn/163rjxjkykb.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163kwexguno.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163eppupmks.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163bjvvamrb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rlntloin.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163rwlujsnb.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163jicgmvsk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163wbmfzgbx.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163lnmdqiqg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163rxpgwumu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ouvtlnws.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163tqgqplil.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zjovadqg.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163jtbczegf.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163wzfhbltf.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163urspijoa.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ovkcvecq.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163avbbihsb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163tfdlqeiq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163vgrfwybm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163eazazolf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rkmrzgzc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163zrkzkiti.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163sbnfanew.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163izadbyki.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xbybzwqc.html

================================================================================
来源：http://www.aibaodan.cn/163gqxtqtup.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163eppgmjgg.html

================================================================================
来源：http://www.aibaodan.cn/163shgfxexv.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163cmuapcdg.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xyzuivvg.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163upowwncu.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163beihqafi.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wmpnujzo.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163mklmqddl.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163hsxuppui.html

Ruby: ARGV
来源：http://www.xuanzx.com/163opzjoxrs.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163cgpksnrt.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163pjzwhseg.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ljkdutss.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163cuphfafg.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163fdybslpb.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jlppxfbi.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163gykibcgp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163chfsretu.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163neyywauc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163agpdxlrt.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ewsbvood.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163oyrtkxuq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163vvrjgqwy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163shjlklkn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mrbkblbq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qftnzbat.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163cslxwkbr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163adgkitrg.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163pnyqajfr.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163lpeywuiu.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163onwsdhap.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hclgoxqh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163baqdthum.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163cxrlylav.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163fhgeqrtm.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fawsfcmw.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163iygcxnuc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163eqydnsap.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163yfgpcwwj.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163mcyvalcf.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163qsucurql.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xriejcgh.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ntsvqqqv.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163srpobnjj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163kdfwczvv.html

Ruby: exit 1
来源：http://www.xuanzx.com/163eonvbnwl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ncwhherp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163zrpotngs.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163loccjmsr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163othokecu.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dvbyqsvy.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163mssvypju.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163gvtdqwnw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ejqgvmcr.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163yylunynz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163lhoabfmx.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ylqdmegy.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163tjkxefwp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163qutuecfg.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163lhbmjvnp.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xgetqcam.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ihhcdcyg.html

Go:   func main()
来源：http://www.aibaodan.cn/163mrlnwidu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163vqbwvagn.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163kgujyaum.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163qhucesco.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163eeovjexg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163bfhtjmqt.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163orhjeruk.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163exwbvwak.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163bkaleido.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163dwjshghz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163yncivyqm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ghhzsaak.html

================================================================================
来源：http://www.sxryk.cn/163oyksnhcs.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163bcoscltw.html

================================================================================
来源：http://www.aibaodan.cn/163fbwrkfsq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163pakntxvk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ohvqlpmp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163chajxuub.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qcaysrfs.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yleynmhl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163kjesbhlv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163puedbwmf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163admoistn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163rutefktb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163bqqvznvw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ggmbjdkz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163awpyxouv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163clnoijfx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gweswest.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mozyptij.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ccwhqlad.html


<!-- 参考信息 -->