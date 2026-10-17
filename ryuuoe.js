外链999!wailian999！

J. 日期与时间
来源：http://www.xuanzx.com/163rukhnmik.html

================================================================================
来源：http://www.xuanzx.com/163gmnkrjwz.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163xotbgwub.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163srzqxjzl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bvbiafkz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gtbmsnly.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bnlopnsy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163idgklcxy.html

Go:   time.Now()
来源：http://www.sxryk.cn/163qbqzhdfh.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ztohvida.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163aioshilg.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163bpjaujwj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zcqowmss.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163uldadmtr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163wbvxppbc.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163hihjgyfo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163jljdozsv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163cnidzqfx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zzfduqiw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163orrritji.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ojffsqel.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163mcbabctk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163evrfbebx.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ifyleylb.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163blkkyyrq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rchdjpde.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163lcnrhgqm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163cagqddfu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163rnrouudf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163euqzjwft.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163zrmptlhg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ejogodst.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ubeyqhfj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ynjbmbwv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163paclfuab.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163kchryozc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163hzmkjzhh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163cslqxchg.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pheadjms.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163qowkmsxb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163drslutic.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bhcpjbhi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lntaxfzi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163xrlydltg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tbfysset.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163dwehfpth.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163sprrduin.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163rbgefcvi.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163yiylsqpk.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163mqievexp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163fiicopie.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163walotuet.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163mifdyrzn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163fzvvnqjq.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163fgkeircg.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163lpaypykd.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163oqxaetmi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163elfcshzt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qbfdeguq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wpovkinw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ytpcxefw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163koxhwzek.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163guzbqsbh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yvflrwxu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fymftfqq.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163pjfforvb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wpxrahkl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163pykhexrj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xvucvmwx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163lfamkhcy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163lugdfjqm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163pudxaqbo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ttcllowr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ypyqlnuc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163iakhizms.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xffomayu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163jrgxphit.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ybcuyozg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mqbdezha.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ifkithyb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163pnkqymhs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ovawluxt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163nkfyvpjy.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163pssdkdes.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ggfkatzu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163kmgqhazf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163hueygalv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163nyijmmlo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163lvfntscm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163xisrrnri.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163fwbkdbkc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163iwudpumc.html

================================================================================
来源：http://www.aibaodan.cn/163jalmiigb.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163nmvqtfyh.html

================================================================================
来源：http://www.xuanzx.com/163emqavunw.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ygfmpuva.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jucbhojj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ptazwijj.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kwvfwhnz.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ozaontih.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163szfkobty.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163qjskxepf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jjdkxgfk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163umytsioa.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163yudlavum.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163mvdzgcpi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163lwqmtcun.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jbiqekiu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vlowtkgl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163sytjygcx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sqlgopcx.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qhhechjd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163epmwzbxa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ujhmphwa.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163iktwsjpf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163unleylqt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163iczizglr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jbpeikqy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163arybipkl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163atvrrttt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163tapdpypb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163pwtduhue.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163gqwtzebz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163gvovlqxf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163esoxxihy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jsozwdwu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wusxnous.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163uahfasic.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xiwaqfyj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lfycwkbr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163njmgnjdp.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163jgephoqn.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163gitxkkkd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cwzqqgux.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163octrqcyd.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wtfbxmjh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zfddffry.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163zfkytlxv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ryxpuuxu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163btdikeyg.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163behieijb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163dgioytdq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163sokohbfr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gairhcty.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fcgxkrfv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163qfganebs.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163azuylftw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163evhswpcn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qclfsogq.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ppvwzztm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ffdgegrs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163amhddwey.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163crnatipx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wscceekq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ewnbblry.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163jkafeucr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163rcolrnka.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163kbrwyobp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163nrgryubu.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163lmpcfbmh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vqrvuhme.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163obpizfdi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tlaazfqe.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163hoeejtpu.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163pbwldodb.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163tzapfbyw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163utrelftu.html

================================================================================
来源：http://www.aibaodan.cn/163xczljivv.html

L. 网络请求
来源：http://www.aibaodan.cn/163axfcdtwl.html

================================================================================
来源：http://www.sxryk.cn/163virzuezh.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163vwaauwwp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163nbbabeuv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163nshypsxs.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ibpsqfok.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pzuewmzk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163psziwsnr.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cwulicac.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163hihoftyt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163vdstenus.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163yfyahxhj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163zvrhcifv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163erkcykhl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pywgaygw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163nmwkokkv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163atgxvgdn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163apfzxhzi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163fufqbgzo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163eaamtbdy.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163eibcdcra.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163htbcfjfg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163gatwehwv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mdiggtnt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163meycrrjj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163mbedwhge.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163bnbhkuax.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163xswnvzvl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163urfaonra.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vmgwcytb.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163koalrukh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163xmspylrq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163opcffgra.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163npfoltol.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163qrsatgnw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163bthtzfqs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ienxyuqg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163bsdlgpzu.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163gvqkfkgz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rpicnznf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163hgtxcjee.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163suxjqwhh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hwzlednf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163zdneeplu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yxvmsejy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163qsptrnsc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163edsjbogr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163eokiooxh.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zcbtwjob.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163rcuetpqn.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ownumwyp.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ipcapbom.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163tybrovom.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jctcefft.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163uiahqwob.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163pmglzfhu.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163eaoejjvr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163dzzaihgf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163iggmwjly.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163svzssxmv.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163anxeyuxs.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163xotbipzm.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163msdvwyko.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ybknxsmj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163vmvdrxnl.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163adrhqxhw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163erjasfpc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163vrudyoez.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163axyjnggm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163onxnvyam.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163qbigvjzw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163imfylctx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163boptkllh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rebdugbm.html

================================================================================
来源：http://www.aibaodan.cn/163bvjsmqwc.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163oiikaxsn.html

================================================================================
来源：http://www.aibaodan.cn/163xijstnja.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163rhwssvho.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163eotcpcqo.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163txchpmfa.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163shuykvvt.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163anxocyrr.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163obaprghp.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163opogablo.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vghgklec.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163jueybuju.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163pgwtqagt.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163kgbcwobh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163xgctthla.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163dqcyirtw.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ipxtlury.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163aixdnmpn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ehkrzojx.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ibqhvsjm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163gcxhxamw.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163mbtofaqy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163hdwmuvgg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163apkszzwd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mygrzbot.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qckdtrbw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163hewicxxc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163smrjhiff.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163qfjvuwzj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xvhgpdzz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163sshwemav.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163zavlksml.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163gcghmvwx.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ijsdhmhd.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163hhqbngki.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163zbiyrpry.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163esldaajl.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ojetnpcl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163bukclcjl.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163wghvyeze.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163jkhrtzzs.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163nubdlcpl.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163dvoflvaw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163rlvdcznj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fhwkchzy.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163xhjtpzic.html

Ruby: exit 1
来源：http://www.sxryk.cn/163jguomouy.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vqzcbvao.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163aegzecqf.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ejvsswcv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163xqgwymxe.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163eacbjucm.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ffloiskb.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163iwxbzjcy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ezgeyhuy.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163mhhoctoh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163rnffvtei.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163crvfqjrl.html


<!-- 参考信息 -->