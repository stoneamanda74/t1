外链999!wailian999！

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mzvrugbj.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163amqjbhoe.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163fjwhadcm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163fwjdinde.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163pcrcafao.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ckqiqiui.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163pbpwwexr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163qcjyacxx.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163hfnwhyxs.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163njiccddx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ixzkazhv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163vpbihrbe.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163uutslxuh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mijarjmm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tscgyagg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163oqskqlyh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163zyprpyjc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163zbmphzqu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163dhxhnxuf.html

================================================================================
来源：http://www.aibaodan.cn/163vpqesccm.html

J. 日期与时间
来源：http://www.aibaodan.cn/163khdmkjia.html

================================================================================
来源：http://www.xuanzx.com/163lhbrxdtf.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163fnvaskva.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163iqnoccmg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163nanyyndj.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yqhqlxah.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wjdbozea.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ggoqwtwx.html

Go:   time.Now()
来源：http://www.sxryk.cn/163erljeaqv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163wpahtarn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163yyhtpynj.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163cueiwucf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mblllvfe.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163feepgpgd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163yvntzfou.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163izdybsmp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163iwchbjah.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163mwmtaamf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rgllgoom.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163isyuivwi.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163goqarwau.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163iddbsghm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163jguitgsm.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qljbteuf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uhqmfgxm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fbopeinu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163qzididgd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163gqexudxs.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163wndzcgql.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163wwlqzntk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163fkqxqtml.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163bpudjgny.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163kvhrcxyv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ycpqhqtx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163yeghyzfm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163lckhxbue.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163jfbxrhqk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163dvpajtmg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163wtvjxeih.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163gybufpqn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163azwnxwzq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lgcqiyub.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jqkzqsqk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163fbmvgpbk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163jfrsunnq.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163slweacgr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163cgatpayi.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163wllkcnre.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ktjlkkam.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163grihawqe.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163yngiqlcq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163hrboaquf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163okvmcdvr.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163bdwwwsnq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jqkyjsdv.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163koygzkqz.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163qlghhnch.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ydngyeuv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163iccutsav.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gzjbdfox.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jeroujnr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163amgosjds.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163zqsvrfmg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163sbuwkehv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nscfgahh.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163nmhpoqmu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163gamtqsut.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163tghlmxed.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ynkxzfec.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163upqieowa.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ycqwktun.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163kprhucns.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163xhnigqrp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ymhsrbyi.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ptoenpmr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163kpcvjvwu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163mhfjevdt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163boyphydw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lqlchbph.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163prxkyybb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ymxdozwb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163emwddmoh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jjgjjjxk.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163xosvtprd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163oiltqvvd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163gdadgbof.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163nurbdmxk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rcydkpxr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163cdqljdbc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163vylvjxjn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163feqgjhos.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163hvdjedeq.html

================================================================================
来源：http://www.aibaodan.cn/163kcxvznec.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kqyohnop.html

================================================================================
来源：http://www.xuanzx.com/163krqgrbln.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ekivlmem.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nnadgveu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163nnddsoan.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bshyubmi.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163adouzwvg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163anbzcvjw.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163joaooejw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163tcvyeitc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ujpwpmkp.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rgphpcmh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ezzmrlfl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163cdobaqrt.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dqgodiwm.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ldnvxfiv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163wofjevmm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ozhdaxbp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163rxtumpdq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163fcwoalzu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qsxkjegr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163zygcldtc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lzqbtgbf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uhazufis.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qewutwoq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ydjpcgef.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163nyixxlty.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ilwtsavv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163nhyzajcu.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163msncyslo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163dvoczjll.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163mctynoyj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mkhtoclc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163roazljrz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163prmphpku.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rtmlspft.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163gotgtnef.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163zmejpdnb.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163tazqeasf.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163nxdefklt.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163jmefkzqe.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163eluiowno.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kpmzxogd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163dmigasjg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163yygccywh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163jrwbiafj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vgrmwarz.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163qxivimln.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163xcsricfx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163yeqdizvn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xiynvnud.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zbxotcyn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163cwjgvkit.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tjwsykrz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163mydtgwue.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163axfzlypv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163byixfnxf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163cydvyspj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163yqaeycsk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qjyxqsfw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xlicifog.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163tbayttzf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163izhsbckb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163lkjihgyg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xdwiiies.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ldwgfexs.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ypyeinyg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ivkjirqh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163njjdvguu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tpgcrnzk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163bounwhdf.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163dcidiesx.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163nvqgqdhq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163nyyiprlc.html

================================================================================
来源：http://www.xuanzx.com/163inqrpevd.html

L. 网络请求
来源：http://www.sxryk.cn/163ujplumoe.html

================================================================================
来源：http://www.xuanzx.com/163cpwayzmo.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163puoodlhk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163gpqnjnkr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163evyrvwmt.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163svnlmqpv.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zrvmgpst.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163nqjtxmqt.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163gglukjdg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163dzvwqquj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vutgzedp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163xpllzeuz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163uqjizsog.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163wpoywafe.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163cdtbvyyy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kbrcfxcq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163dwhjzbrb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nsapndjb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163arvjwkia.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ntubzwvz.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163okcczget.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163tweegpze.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163gpgtqcgw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163maldsnql.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163aqjpcgup.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qrpqjcto.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163sqftvoxe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ikwmpfxb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163oharvctq.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ggdvjqms.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163bfjfzhbx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163lcetotsi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nxxidjwo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nvmqwfge.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163jufqfsnm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163lwgstlvu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163jgvlryuf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163onxmoozb.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ejpjstfl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163btalmkpz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163pfuzbuov.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dqeaigup.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163enagyczw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ixhhsclw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163lackmrmv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163zqswlmyi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163saziukwj.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163kzyvrgfx.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ddffspme.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ylcritbd.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163fvsuhokv.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163gynjyqjs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163eydcyaqq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jgueyvzl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163druopgbk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163wzwbsuns.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163zlgihxxx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163mhbtjigr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163wvoctbxh.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163fsjdooad.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gbaqzbhd.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163rwvkoxkk.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163erbtlajf.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163mwycklki.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ejecniiv.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163conqohry.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163vpltcrpv.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163vuqciths.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qjrrlzcv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gaephsue.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163epytyzcj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163oxcdpjio.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163vzaoystw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163pttnvdpu.html

================================================================================
来源：http://www.aibaodan.cn/163wnvrasrd.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ymqeieex.html

================================================================================
来源：http://www.xuanzx.com/163ybjzushc.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xdmjnava.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163cupdqwyp.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163oecjshww.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ohkjayep.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163goawsbgz.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163rlspzjel.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xvpkwsko.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163asoovjau.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163geqasmhc.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163fwnzkvjm.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jajkuciy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163cjiganhw.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163nglcihbt.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163adhzetkh.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163qjioteun.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163fryqqygg.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163pahaqtbn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163wyenviyb.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163qwnpqauh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163bcfdneqx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163vusiprir.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zdreahek.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dydzexjs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163dcotabjw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163kihunbyq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163sjwnuqtd.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163dgmbdtxg.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163airzexob.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163uboropwi.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163gbdqaybw.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163fmtcggnv.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163thnwymgi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vpzyjheu.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163jlfkxhci.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163izpbtugx.html


<!-- 参考信息 -->