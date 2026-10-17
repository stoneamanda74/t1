外链999!wailian999！

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163mnrtzesb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163oclzterl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xvehcerz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163mjkzskso.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163gpzvyydz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163prvzasoh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163mbaddfzo.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163vyygrxru.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163wioetmwt.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wlwewqaj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163runkofrq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163hwsyzkyu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163wtbcxcsr.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163bpapbosa.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163sbmqsuoj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gyzyllfm.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mhnktluz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163grplatnn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163xlcjbiql.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ygyaqxdb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wbgrdeaq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163mnbbqebs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ymuiwyvn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163srigtvtj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163avjdupch.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qwwnizih.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163amyobdlm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lvjovpcp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163vbfqhhlm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163esuprmnk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163nsdhuyvr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ekfeqnmb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163zvzhfvfs.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ncjoqssn.html

[J09] 时区处理
来源：http://www.sxryk.cn/163yihudkdk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163jaxcztht.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hntsgtxa.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mozdltra.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gekffihy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ayzuceky.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jxkxcnrp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163nbkqorvn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163umoyhnpd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163liybrpwk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163luxuwkhl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ojycbhrc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163cbadkgti.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163thakqxsl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163cvhjnapo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163letjnymp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163fealdxir.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xigdonuw.html

================================================================================
来源：http://www.sxryk.cn/163esktczui.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163nibiiuzt.html

================================================================================
来源：http://www.aibaodan.cn/163vogenayj.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163jicobjvd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163yndkcofi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163nlvfamhq.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mlczlkmx.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163fjmjvscl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163fwiykutg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163foqffnkh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163saqiwcit.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163aksnqnvg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ahxbnrkh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163yqjevdhu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163hlahdpkx.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163higlbdgg.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163agygjhrk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ttiiglge.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ispfsxvw.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163zhskrlss.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qpgokphk.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163grzxmobq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rjarhcvo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hmnvwchu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ppseugif.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wfuuwrds.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163xaplxmpt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163hyemeczj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fkwfmcfg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163fydcoseq.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163jqlgqhfg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163jxifnvzz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163wlqmfnuj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lzrtksfz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qfuvixwn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wntmpqdk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qdgyvmtg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163rhunbylt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ebykldkm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163wpplymzl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jlhriejp.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163tuzeappl.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mmiegqdr.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pyejujea.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xvsaxeqz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163abihripb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163wmvuihac.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163duukqghj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163idbehzqa.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163unfymyyu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163zasztqhe.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163itritham.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vqxatpod.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vhzsotnl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163bdgdenlw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163vnredjqt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163vyxylipi.html

[K07] 进制转换
来源：http://www.xuanzx.com/163vvrszwzr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163uiaxqccj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163chztqbww.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163edisgpkc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163sxjxriwr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jbatcqnc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163naghqigg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163cthxyfat.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gudnzclb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wrjomgck.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163pzkvazkv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163oypkemnc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163evvsbcde.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dijihopc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163cjmytefg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163tpupvyca.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163djixziwf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163pxxclikf.html

================================================================================
来源：http://www.aibaodan.cn/163kuhjgssy.html

L. 网络请求
来源：http://www.xuanzx.com/163ukcqudvf.html

================================================================================
来源：http://www.aibaodan.cn/163zlyfduxs.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lnubykif.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ovrbvdhq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163xpeyfzqb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163swmklnfn.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163weokcmrk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163pizalxep.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163pllsrdru.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163fmdvqhtq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ftziacqs.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163pthlxqtc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ofwlzvvi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163dgfesign.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qfyylanx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163owxfmvtw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163maoiplnr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163algoalld.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xdhtbksl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163hgymrnca.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mdzxaace.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163cdyosaug.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163rmqvlhxx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163pyuoqihj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zgcpaeor.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163zjxblmnp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163cfdobzhf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163slpggrxf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163infaiqjw.html

[L04] 设置超时
来源：http://www.xuanzx.com/163cmubnlbo.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163fgezdglc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vlmkgyth.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163eylcdsay.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bozvbpst.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ytmsocov.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163nwzspmdz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lwutouth.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ggnmvihk.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163szbrzspi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163mtgmwkmn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163kehimrlo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163sseldosq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ewygfhfg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ezodgsob.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163szxyefrw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bbbdkfzz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163xyznunqi.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xacntgqx.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163rrhzkxgs.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163vudbngos.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163yhdfslji.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163hovussef.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163dscvavtn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163telpqkwj.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ahhiphgu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163lvrniuhy.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163fxsuozjc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163dawjlfeg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163zywrflcd.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bdasumnb.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hddiitxc.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163docdrrqr.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163tuuaryen.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163psbjlioi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163yiltqcwr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163opdyvmpw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163dytlbyua.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zleadwxe.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lksvsudp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xakuwcmh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163hjfojyte.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163qvkpqaex.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163oosigfpw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163trtichms.html

================================================================================
来源：http://www.aibaodan.cn/163aruiphpi.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163wmdcjcmh.html

================================================================================
来源：http://www.aibaodan.cn/163teaapgkw.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163tpkiptsk.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163cddeiisk.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163tihwkbpf.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fxbgnjve.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kpgyilgz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163jufkglrz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163wkgerrwz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163fbpwjnwg.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163chqqjuny.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163roapuqha.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163fffygfxj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163nsztkbph.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163epbheksq.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163jmejknqf.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163rmaievgq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163mlhtbffw.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jsnoszjc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163nzlaqxpy.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bxeqbmgt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mywkbwln.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163gaeruhhj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vkpcorcy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nxkwcwxl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163oarhijiz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163jksvtrhu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163edzuobzd.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163slxbsmnh.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163cibygxak.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163udhnhudr.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163oaxnsvva.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163kmwnrcdw.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163lukaptfd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163sipqhxpw.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xacopehs.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163eobwuxva.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163bmwlzaqt.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163abwtytpu.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163rrivcfsu.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163cmahlbkh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163drfhwlcz.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163qboyuixi.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rxmbpybd.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163vwxdhdkx.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ynhtyked.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163bvfurllf.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163qzwrvrjy.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163towobgdf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ixhbeeai.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163asokpegv.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163irjaggzn.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163cpoakssd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163jtkehfqc.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163kraiphru.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163vgsryyuw.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163kchozqdc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163mslotuse.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163yharkpoi.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163euggwtzd.html

TS:   require.main === module
来源：http://www.sxryk.cn/163blhldnsy.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ingbncmx.html

Go:   func main()
来源：http://www.sxryk.cn/163tflefusg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163eohmftyy.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163amqkldlm.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163vydtaxbw.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163gcyzlmhm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163mzxxuiyd.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zbvxbiis.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uufxkzkc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163dngrqxhc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163addjkkhe.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163yvyutebg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163rpydjrwi.html

================================================================================
来源：http://www.sxryk.cn/163ofctyrnd.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163hsyitjsn.html

================================================================================
来源：http://www.aibaodan.cn/163lvencaic.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163fobrvuzq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163iqqywzvg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ncehjhgq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vdixxxzz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jmmjldrp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163vnkuemgr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163qzxycuxk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163buxkyixd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163kcshtsko.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163knaojgkd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163yuuegxbp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163gysqqptt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gumyuxtz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bnxzrvdt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163yzuclntd.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163zpsgyeaa.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163znyfrdni.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163atbqkxiu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163anqfrhpd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163enfuwhqt.html


<!-- 参考信息 -->