外链999!wailian999！

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163vnuwjxnm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163acucpbjd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163jrdlzhyp.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163yuxwcnxt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163pacznxsy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163hcxiybee.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wdvmspyk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zkinefae.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163phvmhepz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163yicpesip.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wlrmlvpk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163dmnbhgoi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163zmyuwnon.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qiolnfmx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163vvoncqrl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163cpjxuroi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ttxnntpa.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mxxucmfx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163krpbuojb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163woerwplx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ilpeessc.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163qaorcujn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163agrqktkv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163socktbvf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163mqecnrmn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163edhocepx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163invebdun.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163abbqbfwf.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163zjwzfjuc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163rmyjhlvv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ckqvwnhu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163bwlaahsn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lcybikwm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nohaqyyx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lzrqfeix.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hznjejls.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ztyqhipq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163mjmqbsxd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lhuupjbd.html

================================================================================
来源：http://www.xuanzx.com/163szmqcqth.html

J. 日期与时间
来源：http://www.sxryk.cn/163ictmsagk.html

================================================================================
来源：http://www.xuanzx.com/163xarvszwa.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163kkrovkiy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163cbngvduq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lcftuith.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hsknayyj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tpgxrrdp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ilnvalzh.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zuovheqe.html

Ruby: Time.now
来源：http://www.sxryk.cn/163wwwjtwvj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163foglsbiq.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163nfuvvlcp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163avbelqti.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lgowtgtg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163iuaytlbb.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163vkvcbelr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163zpihqcjl.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163rpakvohy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cllqwigl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163cqvgwrsa.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ihtdbblq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163bcvlavyo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163vkhxeudx.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163oxcevyxu.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xmscrahz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163arafaqgg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163potbtxfl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163hipgmxfs.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ntcpfgve.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zfczjals.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163wotltoid.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163latvvmkc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163aarxtlie.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163xtlbtuxk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163akbjcjxm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163tbwmwkch.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163zekaxifk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163djdqocqz.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163tdhyyszv.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uhmymble.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163cnkzmvbk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ahdtzizn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163isevfgll.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qbcraqug.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163hottiihw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163sunylgaq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163magackyg.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ncskvmyi.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163dlnxekuo.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vqsfurhu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ltdwdmqv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163semvkrui.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163jjsudsfw.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163aqippfxx.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wgvrpgda.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163novlgybv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ucozvjgh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nmfinsjd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163yxcqtbun.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xnsbbgod.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hcmmhimi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163vnvsvzeg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163sjdgnauw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163oeviypuk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163avzvyanc.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163qttagppm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163iiycgznk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163nixwawoa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ykvpemqe.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163qwqshmou.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163tadqpfbq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163fwmsspsr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163nnrvfyer.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163pjmzbacu.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jtbgiawc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163rppnebvz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mhvsemcj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kvqhjdoo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tpadrtrb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163fgazhuwx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163lnvqzbfy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163irourfbk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cnuwbjcb.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163qrirtmkb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163zwtszije.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163uujcnrce.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163vuupxulz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163xdfnanlw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163loehmqih.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163gxlyzglh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163qlvyfvku.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mqmxqdgi.html

================================================================================
来源：http://www.xuanzx.com/163ubelujub.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163bxbwweyv.html

================================================================================
来源：http://www.aibaodan.cn/163zexmjdmv.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163mwzfodtf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kznzmeha.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tryfjmrs.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ibuyrqhj.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ucwzrdkn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163mmotiuog.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163rpeyaxfo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163qtdpzmds.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163klmxnpkp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163tqbvxfmd.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ujfmxgyq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ovjsgcqq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163nvwimuny.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163aiwugkxd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163zhcbqkja.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rdbyofpj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163tmdjqbbs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163cowvrcqa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163hijpcawn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163krsatlff.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ghwpggba.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yyjynqws.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163gqtsbtaq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163poalyejt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163lhyptrtc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163kozbekqk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163bvycblhx.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qfjbelhd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hpttittq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ovpphyjy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hlagsvoc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fusnicgj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ufjhtrdz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xdwgtkhp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163vojdkowx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ivylhbvg.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hdetimbx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163hbsojwvg.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kpurnrlq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163pbfmujzp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hulcieeb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163psfrlali.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163qhcuqmsx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163hgjcrgro.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ebzahpze.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163mjwawnar.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163aukwbxph.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jpvshfme.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163erojfsdj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xarpoagj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163uovkvoym.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163orahdwbg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163epkplxsl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163nbbmeabg.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xydslpqu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163todlbung.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163rjdlzxhx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mhttctgo.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163oucvsxhy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163mepugqkl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163yufvttte.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163gyrzwted.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163smzqqvjl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xxjeodur.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163wgdptttr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163fnvvstan.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163efhojhux.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fylbeapv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163heqjwntm.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zzznvjdq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ujafuqae.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163oppyjjyu.html

================================================================================
来源：http://www.xuanzx.com/163wjqbtugb.html

L. 网络请求
来源：http://www.xuanzx.com/163yqtnjzok.html

================================================================================
来源：http://www.xuanzx.com/163mcodikla.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ncwafrxb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163benscaxm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163cvjhsnkf.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ugihjqeb.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163cpddihbi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163jfgfzlca.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163swkkkiph.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163iwvmdlqd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ixrgznln.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163pvortzwg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163lllzpskh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163obvtxhjy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ddjrchaq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jckaxbgc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163lksykxdu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ppbrirpl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163zlpxlmdq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rnbzxwcb.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163fbuhdmhi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163whartpxm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163imzgftjl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mwlpmbtv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lgqnggee.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163sbywejdq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163pmzcbydg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163obgmmcdx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163xejtpjrg.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163edhatvkq.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qpgnhxjv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163xtwlrdvr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vhykhvli.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hzvpklws.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163qjhbjeov.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163fuiyxoyq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163guemwfag.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qyxuofgl.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163vdgytlzc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163tndrmise.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ciqqxsdm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xiipfpei.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qxcfrdor.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163iwegxxtu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163luwsmyyp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163uejzfmbc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163nvawkjvo.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163meooznxm.html

Py:   resp.json()
来源：http://www.xuanzx.com/163pyjsgihp.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163uwnmaomx.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163tydchupi.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163xrqhsrjn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ezkkzqxn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ocdfmzgj.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163gzqlqzos.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ehbgmcba.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163quvvpbtk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163aisbwmeu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163hgxsbfil.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pjwcxeph.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zmxqclrv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163cpnofmbg.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163iuzmbmio.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163qclislvg.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qnbytrhq.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qjaekpmz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163yhbcsmlm.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163qjydrljp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163geykygey.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163myaytanq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163gpngrnpr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dcrqflez.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163tikplqaa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163wsugxvqh.html

================================================================================
来源：http://www.xuanzx.com/163gvrxkmjg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ocrafubi.html

================================================================================
来源：http://www.xuanzx.com/163htsnstzz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ltwgeono.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163yvuksjti.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163zfmulsqv.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163nrwelqsw.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qcoqbdic.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163odfvrwcc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163kyrslqmf.html

Ruby: ARGV
来源：http://www.xuanzx.com/163euuxqomz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163nnyzaazi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163nfgrukaq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163skrojhra.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wagsztje.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ibtxwdko.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163givyeklo.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163isidsnqc.html


<!-- 参考信息 -->