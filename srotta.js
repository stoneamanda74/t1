外链999!wailian999！

Go:   time.Now()
来源：http://www.aibaodan.cn/163fmzemgwf.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ljthvvfg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163twfsktvp.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163dysklbyp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tlpissig.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sueiqwmr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163uacyioxt.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163pkkkjtyd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ivjfjqhc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163murocoem.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tnlafzyr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163lcfwexmr.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163kyhjbafo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163uucsdvet.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163moiorkbz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fsvgnius.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wqftwzkd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vlcwqzpy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163kxbrvrmc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163blrkjxqk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ttkhepwk.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163oqmzjydr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163tgqdjifr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163topgiygv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163btbnrosa.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163kuczvmod.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163cnbvcnlz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xkvldxif.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163yuimlacb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163clecoiup.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163shaphvfh.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163onigaycb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xclthfbv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ejxgrejd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ofvjrvyv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qwdkttnl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tpcsaysm.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163hodpokss.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163gtgjpxwa.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bpybgkkd.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163crpdggzr.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163rhxathxf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163yhwtbxvb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163fotwhnbn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163efvouzzn.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163oovvrptg.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ozukrich.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ikdqeohm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163cmoklglu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yoadyqqa.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163zoqnjglj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lbezmzdz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hmljqtcz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163oqhgskzm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nntndokj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bojkpqkk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163swqeempg.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163czfepmwn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163sjhfyrtg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163gnpxyxzg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163aqiguded.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163sptserew.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ureiwexq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163eopbbbic.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ubegltki.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163zrsbwdqy.html

[J09] 时区处理
来源：http://www.xuanzx.com/163tfpdmxgr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jbnizfoy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tmoaties.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163tyebrqaa.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jeyfzkbb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ntkvtdzf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163gndfzybc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163bxxjkfdr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163rltbcgso.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163iwkbjxin.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163yhcfphti.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163nelakmcg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163dfivdnpu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163fvcqdtoa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163yqbbdtak.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xfnmwseh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163cwpdldlx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163chcecgcb.html

================================================================================
来源：http://www.aibaodan.cn/163pwqokslz.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163nuikrtqg.html

================================================================================
来源：http://www.xuanzx.com/163oqpnhjee.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hjbxkkmy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163gzlkcwom.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gdqgfadw.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163hrrtiqnw.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xfpiumok.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163qqsvdqoc.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163fhvxdzxo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163knditnmb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163hmvpdpex.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163mipfrpvh.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163injwujvh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163yqpxivfm.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zczppzsm.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zistmjxi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163weuasvhs.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bpwbjwvp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163kozyimbw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163bbjgyfvv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163geqnrbgc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163lmgpggbd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vvpefgyq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bvknpood.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hpaeqruh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fqcsjotf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wayfmooc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163itknuroy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163cvuqjyyq.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163xsootmps.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163syijrcji.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163zjfuipoi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163flvtmlar.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nmrydcus.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163sxxfhvzg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rgosikru.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163kychvije.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163njliaqtg.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163weeczatc.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163wejsxfrg.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163njgqgasx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163cuvxwbqf.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ekaztfqa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163beyztspq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163fhtftuad.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163boyltgyo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kfddkkrt.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163kpncqyxt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163umzpqhoy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163kjlkafjo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163axxbzjxz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163otefxtxd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163qzopbxfx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163xfwtclpy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163kcwkndid.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163nyojxsvm.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163hcjhcecp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163hamasfmu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163cfrcykfd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cmimapsm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hbrzpfwl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163blrqhugq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163zvvbhnow.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163bwgppwka.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163mbsgzhta.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163vzvcocfs.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163suodtufp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xqbimxwr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163asduwnue.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zpuuryxu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ndrfejti.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163oriqdfao.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163pmhimlst.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163adrdyuoh.html

================================================================================
来源：http://www.xuanzx.com/163impbyuar.html

L. 网络请求
来源：http://www.sxryk.cn/163jgootapw.html

================================================================================
来源：http://www.aibaodan.cn/163vppfoiey.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163qiltkynr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ehlmgjru.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zkaivlfw.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163zoyijihn.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163sphjygve.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163kagimwvi.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163biatufkj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nhfeglaj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163vwqqychz.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163qbzbfxss.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dipfxlga.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163iivnnsiw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wkjdjhbn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jdszwyoj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jysaygwj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163awnvamzp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163wdmfscao.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163znbtngcp.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163esxrhcjc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163qqhjzfah.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163sprezmqt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163eknystjb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gxgglnya.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163pytgxuzw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ciswjnyb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163xbfcxvum.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163eobyanup.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163dcpsloor.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163kcwooygk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163lcwndfdj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pcalcqjk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vtboaayr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163jkxtkadp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jppewaiz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163aydtgtxh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163nxegawpu.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fsvmwgma.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163snlhheix.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163gyvftrsx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zjozqrbx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hlxqvtmk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163sokyzosv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163oilnkncb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163nksetmsg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fgecjtud.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ffhizzbr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163yclmqhhi.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163fqpocxue.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163bpwjodxv.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163pezotyya.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yjnzbnjj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163eqphcflx.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ljnzhpcc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vycsfuhe.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163lzjbhrqv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163kwstwsho.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163dxbqpfyh.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163akpzuqkq.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163swzdjlsl.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vfvoyoaw.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163zaqsswcw.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163hbzkilir.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163fznexiln.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163uqtedawz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163svcqtzjf.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163lsrkbubo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lyavtqrt.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nabswoer.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163hxjklqmi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163bkwbizvb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163dbogfnef.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163vxlvdwbb.html

================================================================================
来源：http://www.sxryk.cn/163wwgptlps.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163sxmsgjlg.html

================================================================================
来源：http://www.aibaodan.cn/163yejcivdj.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163wlcwrfhj.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163gyehmvmk.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163btngxdnc.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tvraatfz.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163oyxaxjnn.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163pzrsqqew.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163fsgbuxlz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vgryzrki.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163tndbvlzj.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163aipgqizq.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163hxpsdoqr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163kifgplov.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ngzbvkch.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163iyscjnsr.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ozrnkcca.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163lvgyltxh.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fmizncbv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163wwwlcafz.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163aqmqyyzb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163nmrptplf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163aqvbtqkk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163iwkohdam.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jtcnxrgd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163qosgwrog.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ysegkhiy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163muopmprl.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163kbpzhfhm.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163mbxenaui.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ibqiqegl.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163jrowgyjq.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163hcvatmpq.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ybwqrqsw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163tufbrhqd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163xllwpmkm.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163njlhvtbu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ufkfvtrz.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163wsivstqs.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163fwxlyhvn.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163rncukscy.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163estfbtth.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163mkfolgfp.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kpuvyaax.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163epspntqu.html

Ruby: exit 1
来源：http://www.xuanzx.com/163qjrhkrtg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163hfeguvdh.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163uxgoruhz.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163tsigwbzr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163sqlwstgj.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163yuctkqje.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163mlpcwhnh.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rvtpgbcs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163wzhfjsws.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vplugrsn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163cscsxand.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163kcwyaxui.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zntrhysu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163pypkocqn.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jpufsfbk.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163jxyyddzz.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gjxmeqei.html

Go:   func main()
来源：http://www.sxryk.cn/163zeenxogj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163vidkfveu.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163fdxesfyp.html


<!-- 参考信息 -->