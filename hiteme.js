外链999!wailian999！

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163gizvbrqd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163aomnpvso.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163keyezyqw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163uiidlfyh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163yfnwvjae.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dcbjlgvm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163fpgskjjh.html

================================================================================
来源：http://www.sxryk.cn/163instlyya.html

J. 日期与时间
来源：http://www.aibaodan.cn/163znhwllit.html

================================================================================
来源：http://www.xuanzx.com/163fiuuvrom.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bubtvlnl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jsbjsxtp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qgncmffk.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163huzmjtbv.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rylxrzlb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163crkljfmw.html

Go:   time.Now()
来源：http://www.sxryk.cn/163vjsowwxc.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163hpqdhybs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163uidlciav.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163szmoxplp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tkgfgesq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rdomazpv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163umjjshyd.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163aypnfbpi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163iealabxu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163jkreopwf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163bfiwgaqa.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163oxevtdii.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163wlgcqokz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bkxpfznx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163vozqbodn.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jqosgzwj.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xbrijtzw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163cywlqwnr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163afnvbnzx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163erizwdlq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rkhgtneh.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163uqargxol.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ojfvsswp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163eqpqwoqq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163dtkcfhmr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163yngqfoiq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163hnrhblqi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163skbemvdr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163swimxgfd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163frzvbajl.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ercaelho.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163fuqzfzca.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163mcqiunsh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vcenabhz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163umlevcjt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163oqdwecxu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ygcgovoj.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163huvxyyrt.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163isryujzk.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163cpiflvve.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163howvdbim.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163nuwwxftm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ydxfqgxh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163mpivmnrm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163zccslgun.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hatfuafg.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163wplulqhk.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163mrmxmjwn.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ccqadjsq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zimtrmxx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163eawnjrfj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xohalmvx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ypuxbljm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163blxvufqe.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ekvcwvaa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ekpjcefv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163apcjhzeg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ateqtbjv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163tmavqoix.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163dkufecpm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ecekayin.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kicjzvei.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163yfnccpnv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hlnryyjx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163vzvoiqoh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163rqcytkbq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163kixznqes.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163vklfrxah.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163xfxikcrl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163esuxkcdd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bacdjstm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163izsantes.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163fybwceie.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163trgfiqit.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163douqerpl.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xbfccmas.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163kdwmtvyl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163acwkmthl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163azakfiwe.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163mqwfmepv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163mpvtenli.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163dsxiaffz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163aiqjslwb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163lfhllaln.html

================================================================================
来源：http://www.xuanzx.com/163ufaxdmun.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ppuewuat.html

================================================================================
来源：http://www.xuanzx.com/163roqdwxnj.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163zvmaaigy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163xhrzatvb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ylkcgucc.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mxhapqzm.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163fpkwngqk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xdvxklmj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163agfdfrzy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rhvwmxix.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wnnmuonh.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jhclzhyb.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163myqfpbjg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163uxzcyuyf.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lqhakcts.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gpkicjat.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163gklnygub.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zawizhis.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163mjltyvrh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163myjuuasm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163yjogpfuu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163svnjlwen.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qrmnjbnd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163apbmyuva.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qlilxloi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163iemawxgv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163zqtdcqbl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163lzgazdcx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163btpfkuex.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jnsnvsam.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163gdpfiioz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163agwpbiac.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bgqopipa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hfauxvkt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163tktzmlxe.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nxhoplbc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163eidqnqlo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163vykiqkxh.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163aghgexno.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163kggomyrw.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163sgdtcavq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aqyepgcm.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163slskwogx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163koyephsr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163anifwntr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ewcxfzwe.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163tdanexln.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ztnflesz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163lmklkpkp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163dgqkfeyt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ezdsbhrg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kqnolaac.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163dauqvygh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163eupfqidh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ctrypvvm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qaeywoyb.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tqmocyvm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163wnrfawrc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163mdstlfxu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pxfdmjmj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qidpphze.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dlhmmamo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163whtxbnhh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163eufjerrc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wcpiqheh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163hhmtrnoq.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163agsenhci.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163tyvvnjqp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mtdjbyam.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dkdwpfut.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163glvpkjig.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rvoktyxr.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163vkkhndtg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163bqdympjz.html

================================================================================
来源：http://www.aibaodan.cn/163esyaduhy.html

L. 网络请求
来源：http://www.xuanzx.com/163tulkafcr.html

================================================================================
来源：http://www.aibaodan.cn/163kxkopxor.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ciggorfh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163zhimwczy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ufblcarh.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163btcrmltw.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163aexrwpiq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163facgbqnu.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163pgmksnpc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163bskftlyi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163jughkcqw.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163yvbosewz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wlpnzram.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vvbubayo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ulrjnrkb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163swqudgbp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163hswdkzrb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163gprmteca.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163sytecpkj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163rnwnjbcj.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ijfjcaup.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163rmgcvaux.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163rsfdsrvk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yhubyffy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ndhpkhke.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163esxphfxs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163dadfudjo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163mywrcsuy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163fypwfrnb.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163wxkxmpmy.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163kjmuodmr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vczaqlvp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nwbnivnj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qdijehrd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163pfrkmxxn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163znhyhxgw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163jobxjstd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ouqgzfos.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163josmvfgq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163yyfmztws.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163lhplfcpg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lryhjfff.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qahkeceq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xjbtejtk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163dacimugb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xouojwkx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163zqdmovuu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163lbsxocdi.html

Py:   resp.json()
来源：http://www.sxryk.cn/163plgtmdpj.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163lckfakay.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163uxxwnwwd.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163xugwbkgr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163vpytphce.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gudxsvvn.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163vbkupcot.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163rdobqswr.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163pkbsswnq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163otwiukfo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163stzsfzit.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163alaxworn.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zhtnyjzv.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ouqnygbd.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ghgpwjvn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rwunpoxm.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163jyfnusfl.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xnsizrjv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163nnjanyhd.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163lvlzvxra.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gpwmoqjf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yxncqwbs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163pqzgrstj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163pgxrqlpk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163cacwnpee.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163subuhsie.html

================================================================================
来源：http://www.sxryk.cn/163csrukyxo.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163qettondz.html

================================================================================
来源：http://www.aibaodan.cn/163snqnagyl.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163pricksik.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163hunyorjj.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163pbzibxno.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lgkontcf.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dosmrzad.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163coagtgjx.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163bbkjtgmx.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hpoywilq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163vttnqqno.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163uaiwglil.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163qhzpogbi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163lbeiwezy.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xmktyosu.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163sznftaol.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163qvkutigj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163pcmyvdcl.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163oztextno.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163qufplkyh.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163jhicdbrx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ofhklbom.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163cbrgkfds.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163upismpib.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yrnglkri.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qadidpbs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163xgrpzbog.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163kabgrvhu.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163eoyptxtr.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163fjxkqsux.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163jrqshtox.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163llbzvnwy.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163opuvrhlk.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163esqcyket.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163cxeqbizv.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163lzzbjftb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ohkmoryw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163fnprqpet.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163awhtvfer.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163dyjbiivs.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163icwhpdpe.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163jhmrvhtp.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163glkbitwh.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163jbbapqfv.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163sgfdezkg.html

Ruby: exit 1
来源：http://www.sxryk.cn/163mefyzxnf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163iuaoytnl.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jfkkiaac.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ojzwueip.html


<!-- 参考信息 -->