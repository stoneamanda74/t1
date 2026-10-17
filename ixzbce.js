外链999!wailian999！

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163lflgsbcv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ygjobflu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163wssazzvm.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163vvqpqrlj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163sohibwuv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163igbynqbj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tvtitvtv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ktbnazql.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163cotthugm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xonzfisy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ccaycpys.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ocyktwam.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163uolytoba.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ceebheyn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163smcdmtpp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kvyzvsod.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cyfxjnyu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163uifjryhd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163fhtyigpx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163fylmucbs.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ocnjuwhj.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163lnmigzxz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163kcakrtzm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163enrrhmuw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163axohonyd.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163fjsmzmyb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wvtjhrsb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163sveokyky.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163rwodzexn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163sozehixe.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163dihfdbkx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ywymkqwb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163gsserbra.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xpbgamtp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vrakuiao.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163xyjiggqy.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163nixhsien.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163woyphoad.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163joxixwmc.html

================================================================================
来源：http://www.xuanzx.com/163zzcsgbhi.html

J. 日期与时间
来源：http://www.sxryk.cn/163hrrksayu.html

================================================================================
来源：http://www.sxryk.cn/163libgvnfs.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163oetbdnmx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163xyhxieub.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163klmpjhrg.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163iczuirlv.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cejxhqhj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163bdyvtlpb.html

Go:   time.Now()
来源：http://www.sxryk.cn/163injzkxzp.html

Ruby: Time.now
来源：http://www.sxryk.cn/163xfvbnemo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ymnwowhs.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163sskhuroa.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bwybfxdt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163nngfrhhb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163imtxnszz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163zcaockex.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163atmoubek.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163bqgqviop.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rdmazsry.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163kcxkjkjd.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163yndupdcw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163nzdrhegi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163slbzlzum.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bbpsyhuu.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qpgvzozu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163apoqneig.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163vwdoojxr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163moetpqkw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163iuxwwznh.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hmfzmman.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163yuxvcfpm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163zfmparxp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163hlryghnq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fynbknec.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163pzbwdlwt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163bravtkqk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163wgkfxxob.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163acrgcmok.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163rfgzamyb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163huxljtbo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163chlqiavp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163muuwfdfw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163shcckbdo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163lvlhrodv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ikrlnmre.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163mjmzumys.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163rntthequ.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163gxrhmler.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jsilgbff.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163znnxubhs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163hbzbsaep.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163lihzitmk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163sfagosbn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163rfuuukaj.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163skruywcc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163drhjmnzl.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163apaaawsz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163euzpandj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cfpkzynk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vscqotvu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hrlxuihx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163fcxdmmil.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163seyokpxm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gnwkpqzj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ahabxmgc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163uumkcwbb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163uorvklxm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163rufimdnn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163qzuszdea.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163hhxzojah.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ceikdpph.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ngjubuvf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163remokjwt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163mptbfqgx.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163totwhhnv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163qjbfejwv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163tmbeceht.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kvlbevxx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gekgmlvj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163igcuhxfm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163tlvywtcs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163pqxstiur.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163gehitjlb.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163rsirygnb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ggjkmeam.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163pqbcvosy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qgiggmcu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163sxfoqmpr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163hobrnwot.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zdbilupi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163dhqsvwtj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163rezasipp.html

================================================================================
来源：http://www.aibaodan.cn/163tgynffjc.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163uumorztc.html

================================================================================
来源：http://www.aibaodan.cn/163rvczsufg.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163cfaxxfra.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163umocdmma.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mxqonfpw.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pfnoqqtp.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163lmpkdamt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163hqndajtj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ndypfspn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163reuylsoi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163cgxlfusi.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163tftmvidp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163eruclchl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163tzbwnsft.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wmzkqasq.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163uukjcwsr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xtqerndn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rojkzkrn.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163rhztxhck.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qklkqick.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163rkdmjyep.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163akzvbdkt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ljgoezbf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qgynllwo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163spgywdla.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163uissuseq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163iiwnovls.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163nuymkprs.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163lxftopnz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163bjyurndc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163iowikxsn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163mwzfwugh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fwkccdwr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ytrafsga.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163gecaakvv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xbbvxckp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163eotuasky.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qpyyiwdw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163jpntcxkq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163fwnqulek.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163crcoesvm.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fvkeepva.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163tafialdy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163kupodfbs.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163yfqkjsyk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163vjtnwfbi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163njkrmqdi.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163pegqownb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163uhizkknn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163nqjgwgey.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tlchsmqg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163opctgpgu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163spqeziyf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ntaruptx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ngtoegfg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163qoyjacwy.html

[K07] 进制转换
来源：http://www.sxryk.cn/163jitzxtnd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163meqxtjbd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163blbdorto.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qyzxggmw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163agdsstxk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ghavbwze.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gbsketbv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ffuwtdoq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163xnthnojs.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163aevnbxfq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163hvaxuqfl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163tetbsddb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kgvruulo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bsexdlzk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163twwjswcc.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zpbjdgjh.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163aetkmvhx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vrykfaxg.html

================================================================================
来源：http://www.sxryk.cn/163gvpkudun.html

L. 网络请求
来源：http://www.xuanzx.com/163unlnqewk.html

================================================================================
来源：http://www.sxryk.cn/163boqsbhdp.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163yjiumkyj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163xvllbwlt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163trjtypvx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163kpadexzv.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163aybymmib.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fkfksqbq.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163odeuymde.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ppnfnqyk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ylxpmsox.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163trptjefp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163zlpircxd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163tsemuswp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163swogpiff.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wyxrkpqy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163lgvxxtmb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163otbntzhy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ztswxhfq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vslcxcyi.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zdtejucw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163zotmayzw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163bcpmgpgh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163faclrpns.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fezqrdfc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163licrxnnj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163frqbfydf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163kqahcoaq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cnutfmcy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163pklmwied.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163mhhqzhkw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163gysntqat.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qjtgzqxm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163khzbaftf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163yfehuwau.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163tczwptpr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163onbawpfu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163yyaajkgu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163hasctzcu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163fsbetfzm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163yjtwktta.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163oljuobzi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mjmhfxrg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163qzqpuygn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163aibhkkzv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kxbndjsc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163oqbygsle.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163syaicxfy.html

Py:   resp.json()
来源：http://www.xuanzx.com/163kdanjing.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163clxqeuvo.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xpzdrslv.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163sgzxnkpo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163wisfdhqm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163vmmpqsdw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vysovuex.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163tsphlojt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163xyhxrfsa.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hfofrvur.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ypyhpqtk.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mldjzujq.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lzdzlplr.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163kzbmglsy.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163eiregaqj.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ukprftbi.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163rxeprbut.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163cgwvwiek.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163gcdlhmjp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163bjtbhxlb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zvnvhxga.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tdvqbndm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163sdoedqmd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163oqvomkbw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163aymltavk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ihuberns.html

================================================================================
来源：http://www.aibaodan.cn/163emohmuss.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ufyhexmr.html

================================================================================
来源：http://www.aibaodan.cn/163lxhcpoqh.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163zaxswwsu.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ljigxzuv.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163euxxsrzl.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ntliyben.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pjkugcwm.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ocmbddac.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163kiwjlgjs.html

Ruby: ARGV
来源：http://www.sxryk.cn/163noeyabpi.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ohyzhlhy.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163qgtsftgz.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163bulqbiwi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163dcpjryiw.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163eqtdqpgl.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163glafxoss.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ggnpajhc.html


<!-- 参考信息 -->