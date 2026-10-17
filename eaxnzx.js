外链999!wailian999！

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163akxhefxc.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163kbpqxfxb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163amdmwzpa.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163rmwbuysv.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163qoczdylt.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163deinomoi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163grdtsfuy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ycsdtiek.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163xizwldcs.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163aqockbmq.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163nslwnluk.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zfuxbzbg.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163etnrrxyz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zyjxqxsi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163bojixgjh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mivghjuh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163seifofjq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163pazobenx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163jjhpcwgg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dwjmnkac.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hiznolwy.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163xhuacrec.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163qavhgsrx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163fuajjamb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163epuazyej.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jwchmirn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163vgyyxmtd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163cclrkjno.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163qildbmyw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ildyeclb.html

[J09] 时区处理
来源：http://www.sxryk.cn/163biqmjdmq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163mholvxvj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wilavzex.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zmcxqijz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zthxnnxw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xkxujdrd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163gvvnphar.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163nbihgnht.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bkgcvrld.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ujwkdmik.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163kkqynzcr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163bhlwxafu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163olpxevrm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163oewbwkcn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163uzaafttx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163snmlohcb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163viuymsaf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ipxpnugm.html

================================================================================
来源：http://www.sxryk.cn/163vajdvbqv.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163evcdjvip.html

================================================================================
来源：http://www.xuanzx.com/163wexcazgi.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163zyblqgnm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163anqyfiwp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163plgvlayc.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163oqizafnr.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xavdprzb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163hpjcdoot.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163gamawbia.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163oiutyqty.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163tmnpvpdh.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kdabkynn.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163xlfntkxo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ssldozjs.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163djbetvob.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163girbgljh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163uaxtavxl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163opvwugbw.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163cfrdzgrq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163udmcsoub.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163rzhezqbc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163mmqzgtdr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163verayqcy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163oaoumugm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bgmwafyo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163orgilgeg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163auovhgrp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ppjwdqtu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163tdejinyi.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163eemgstvg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163qiudspkn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163uxwahquc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zmupgmwl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nqjikvky.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163apowstuh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vvjvpirt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ldzfciwa.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163xhfaqsch.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163qdvhvibc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fymgnxhm.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163rohpokzv.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163quojksal.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tegvghpy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163qmfewnnz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163umkkfhls.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163sxxabiru.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163zubuwqjy.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163blewhixk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rirydkum.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ucsewcgz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vwnhqpgr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ykbanoon.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163cinaejgg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163trtcdtgo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163xehjppyp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dgfpykwb.html

[K07] 进制转换
来源：http://www.xuanzx.com/163oaqqdxik.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163xvzphlnd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vabglmjm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wnrsznlv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rdqygvnh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163inrmedru.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163yrzbufdk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163auyoaecz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163kwigdprq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163tzhkxxoy.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163bdrvgcmz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163yeoylquh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bczlbzce.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hxbhmchr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ixewxgqk.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163aeiovmch.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163hfyzdnvd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163gmbuklwm.html

================================================================================
来源：http://www.xuanzx.com/163tvgwrhzk.html

L. 网络请求
来源：http://www.aibaodan.cn/163wrwppduz.html

================================================================================
来源：http://www.sxryk.cn/163gcueaizk.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163phyffnhd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163nbzbhydf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163wijomtdj.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xidudgez.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163rhkeimzc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163nyempwnx.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163suffzyaa.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ibcxkfoc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163qzmoaldl.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163pbipotpk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ctqugwom.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163iibjmveo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ciwwidfo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163acpavrhd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163sqvlzdcy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163bfxxvhko.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163hjftrbsg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163dpowgnly.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163oujqdndv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163snzxyeym.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163evuhyoic.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163borokwmi.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fgmrntrf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163jdjglgos.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163dzhxbbtv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163yzsdjvky.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163rfxjyoqw.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163aeiulosl.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163xgrqcnuv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163bdqaglaq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bbrhltfv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zulblwqi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163dwrlagdi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163zttpqatg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163caynfdoi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ptvpzbuf.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163tbkjrcyy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ilguuxuo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163lpjcfihj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mfivmbyo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tmcitgod.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163nkqiinqn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163htpuchgv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pfwwgijy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163fbtaxoql.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hoivbgkl.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163mlvmybwh.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163otffffpu.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jmodslhe.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ouzmtcyb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163kpusrijt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ildzftmb.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163akmaqjps.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jsytwlfv.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hwfnjtdg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163doetfnbc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163hwycyboc.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163osrowsiv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cgpekmcx.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qicuajki.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163joswbqzb.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163nocxglwp.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163dxvtxegy.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163mhpdvajo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163qffxlhvm.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ovazdhoc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cdsbstwu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tlzvpjqq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163vjsjqnzg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163vbaucskc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163sqeifjod.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163uyoytwdu.html

================================================================================
来源：http://www.aibaodan.cn/163ynakiogc.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163nvijyczq.html

================================================================================
来源：http://www.sxryk.cn/163vvntnztr.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163zzchyayz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163vptswerp.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163btqidtxi.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163udovjcmh.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163nqjttcbk.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163kkwvtklx.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163yderchek.html

Ruby: ARGV
来源：http://www.sxryk.cn/163inxevodu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163raomqgnj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163keemsmbz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163pxbywufz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ajypdkvs.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163lentqgsd.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163yqqjhleb.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jpmixxif.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pzoiaxpr.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163yklwzqfc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163mikcwrci.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ukcnolpk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163xxybngys.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163cbmckrov.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dyhnbydh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jbafudnu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163rxmmpbuj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163abwjoixf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163knfxgxxe.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163msytdpzc.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163zhvieibn.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163libnmawo.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163xwzmlutc.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163cvybiqbo.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163vnyyzbzy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ewegcqcr.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163lspukboc.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163sojupzsd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163miehjurc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163utfyephb.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163yrwysmaq.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163etiuqbrf.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163wwzzzkgy.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163xqzyrqeu.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vdglzyyy.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163gntutqip.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163bbsskbnb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jwamuglt.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163tyqvnmpf.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pzvcwlqt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163uqnyhbfg.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zjempmvm.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163fzouptat.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zqjumklg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163deynlkce.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ogvbfuby.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163cyqwbfdh.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hxljjgvr.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163boognvlg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163qenzasxi.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vobomocz.html

TS:   require.main === module
来源：http://www.xuanzx.com/163omlkrrsu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qwgfohrs.html

Go:   func main()
来源：http://www.sxryk.cn/163nqcvoavl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163mptctnms.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ptiukarz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163vytbcsaf.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wdcfccxt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163avlekkil.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vmrlygbo.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cefwoshd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163htqkirpt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163reicinai.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jlvjgane.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163gyjmzmtt.html

================================================================================
来源：http://www.sxryk.cn/163hzhvdqxp.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163esriskmd.html

================================================================================
来源：http://www.sxryk.cn/163xoesdwbm.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163jfnrznav.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jpkpavyc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163onzskupj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bhjxcsin.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vmhwpobl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ftirbxah.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163qawhalhe.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163xxoxacaw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163rxzlvdmw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ukmaffas.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xlpvveak.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163qqngsfvy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vvqinxhu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xomovftx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163fsalnkdu.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163icpiyqlw.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rpcttzdh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163xzkoavgl.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163mnklppzv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163akpzphot.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163kfkqceop.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qzlqavbx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163sjxokkfv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163eghigoic.html


<!-- 参考信息 -->