外链999!wailian999！

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163wqwdrwdk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163avswmamc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xalkpyyo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163obddskrd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163enwigfjc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163clonmugj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163psdpjjnq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gunibpot.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vdjrjqnl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mcfyjoxn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163zizpymeq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163hjvklffx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bwuimvzj.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fkqcgzks.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jxovdvum.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163asggpupg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jpgowhrk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163vfdcdhnr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163oefcbdgt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163gljrhczh.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wlmbxwsv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xyecxkdl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qrsaxdjp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163dabkxfxh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ofiugxju.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xhxmrqln.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rdbsbvrj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ammglpcm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163puzktcbz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zowskpqx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163puxkhgbf.html

================================================================================
来源：http://www.sxryk.cn/163fdiyegtw.html

J. 日期与时间
来源：http://www.sxryk.cn/163qcqewmoj.html

================================================================================
来源：http://www.aibaodan.cn/163drwkuxrh.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163xlzadjii.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163raddzkod.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163palwurtr.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163awlkydwd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vyofjbjm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fodlkblx.html

Go:   time.Now()
来源：http://www.xuanzx.com/163drpnpccf.html

Ruby: Time.now
来源：http://www.xuanzx.com/163txrzforg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163stpbvyht.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163znhwbdjr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hqkmckhl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163uurjlnif.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qjamcuom.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pxmqiqip.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163syempujf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ealuvwrj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bxhyqlcf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163coxcdfln.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jcmvrmjq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163nmrdrlnx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163qhljdjrl.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nxrufnop.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mpppytjf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163uojafmix.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163dcajkldg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163fnmoxzev.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vhrnmrrz.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xirgrfpm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163bhujydkz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163fcbqrcsn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163mzumvntv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163tazmulat.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163afbidimc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163bmylrtsf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163scublokl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163dldkcxwv.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jbcbleuf.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163qdveokxj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163skyhrbhe.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yyafpjzr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ppjdyfhy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163pnyjarie.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163locrtnzl.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mvksnmte.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163njgjbrzh.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163caozhqbr.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163spjxcych.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163nfniokup.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163qilrnvtg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163uhgzoqft.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163mipffudn.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163gnhvinzc.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163vbwwinzj.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163aakfmqrr.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zpzsrysb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jjypwaqe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163dchraypc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wkmnhdys.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lvwqpfoq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163esonjtvk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163pqlcrtez.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163raxebwwj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ripjlera.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ksortodn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163gfykwssj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zvaxvzcx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163tlpqfnpz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163dqcyihne.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163uitptuda.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163eztwclav.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163uotmrleu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163nsivhlwo.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ypayvyqa.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163mqepslim.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ubjrwpqz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qlxyzdjl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rewkwvji.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163wrddiodk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ahcolagr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163wojphiqe.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jvldffnf.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163wmljomzc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163rnrayhnc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163cpgzmdaw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163pmceaqkw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163haalfcwk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ksodecye.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rnbuegmx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163hjtsrmcv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163opzahewh.html

================================================================================
来源：http://www.xuanzx.com/163akqzdcna.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163rphukloq.html

================================================================================
来源：http://www.sxryk.cn/163udedjppv.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163zitniasp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163uflbocpl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163czedksog.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dccwxemd.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gbarsjtv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mhxsudts.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163plcjpvsk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163zxnnzpuy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ialclshc.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vefaoqot.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163nnmbwkcd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163csvzngfy.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vyaugpxy.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pnoulppd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163rxtzltju.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tdelcawp.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163diegzmze.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163edevgzkr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163xmxsuyqp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tgrxpadm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163abtkjgmy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163oagecoom.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ghzavewa.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163hxcoufwk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163pcjvfcaa.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163iytcjdmt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163xxyfzmvm.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163huerrfbv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163fsdbdcgq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163yorlcuxm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qllokkux.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xozqjbmq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163lgucavqc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zkobefbm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163gxyaluqr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fbsfhghf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163gtzoscau.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163vvlzmjiy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163alkwcjcg.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fvtveztq.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qfllwxhw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163gcrgwcol.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163dlmehull.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xcjzaesj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163onuclijv.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163nfxzjzxy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163kvouftll.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163sugspvro.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ldsayibm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163iglyeebq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163xpzqlbdm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kqerlzwz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163yuoccvrx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rxanyjvk.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163bllfoncp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163leluvsfu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vojiwxrh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163trdpmmgc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xtziutzd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dyrhubyl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163dkwewqtj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163odfqvkkx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gbutlzor.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jxzpkqjm.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ppirxyda.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163fpnyvrqz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163evtexihh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qkhnfmzw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163upsrlhhp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163mycumnhm.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163bemugbhu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163obzkyjdr.html

================================================================================
来源：http://www.aibaodan.cn/163rprglulg.html

L. 网络请求
来源：http://www.xuanzx.com/163srrhvies.html

================================================================================
来源：http://www.sxryk.cn/163ecxggjrm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163razjingr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163zfubwouo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ftntaczs.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jpbcoewq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163pxbdbewq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163fddpnptd.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163wqcsicby.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163evlicrnt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163rispnniz.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163mcfhnjmu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163mhhrztqr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163yeouerie.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uryvxbdq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hhjyocsq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163uzpsmgxo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163oamrztwp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163teldysto.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163nduzbdno.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163emmndkic.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bvnisobr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163uuxqtbpc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lqnaawzz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kctbzlmx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163azydincn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163eumxopzq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163icqsiker.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163galtidqu.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kfwhdfau.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rwxighsq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163beljfvvd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ohhhecam.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hvjrlwdy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163bybtbint.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163elnfvgfr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nndhheog.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163fzphknbz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zblhzdaz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163gvtpsgfe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163oonackxz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hfgccarz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xadodyay.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163eutycrge.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163nmyrzytn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163vvvkojyu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163cncmorqu.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ertmfhjj.html

Py:   resp.json()
来源：http://www.sxryk.cn/163pspwjkut.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163gfjrvicd.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163lmtarzjf.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163nfsifhqe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163qewepcsn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163rizcugun.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163nbgbayan.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163yajqzmpr.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163athyccmf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163cgnbwfts.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163zqditptj.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163uoemwxwc.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163syehiwto.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ywfwiypy.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163sfamxkyw.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163dseeplws.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163kubxadsl.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xvrhtbbt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163xiwuwanb.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163almgsydg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mnahzigf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ujghmcbe.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163iftbfkhr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163gmslbasb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163aufqbcci.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163rtmmwvwe.html

================================================================================
来源：http://www.aibaodan.cn/163onbeyasg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163foznksfd.html

================================================================================
来源：http://www.aibaodan.cn/163umyhymdl.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163cfoxupxu.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163dyguqdes.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163lbwlkcaq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lhuojzko.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zliwlwcd.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163lbgztohx.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163tlwvefhw.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xvlyfnct.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163vnxqqeag.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ubeyklwl.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163zgfakuwx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163nwpuxibm.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163dyedvjmf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gewuqyjq.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163qpzqrclr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163bhrwizao.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163wqgiqsxv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dtcetqpu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163nrbotqsj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163pyapgjqn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163jgmdnhyx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xepjiewp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xaojdmhe.html


<!-- 参考信息 -->