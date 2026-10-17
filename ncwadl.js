外链999!wailian999！

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163totyyikc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163agjklktl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ewlbvzic.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163eotkgvys.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163pflrhrux.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163hkqiyrcf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163vjulshjz.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163xsddrioj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163cpqjbsev.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163wpeilxwj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163panhtagz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uwelkssx.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163jucjkzez.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163iinrlbez.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mkwdenvo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ipjingln.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163hmdsywif.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ztbexkqh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163zkkzokex.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gbrsprqj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163pnzyyqoq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163lkskvbhh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163cdrivzhs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163kpzoamqg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wfrtagag.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163fipfbcjl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163manqkkfs.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163gohztvuo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mtoijsar.html

TS:   /error/gim
来源：http://www.xuanzx.com/163tzggyxlv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ijxmrdzj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163jgwlrcsc.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163yengotyv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163zafavpwe.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163wzbbnkju.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163bzouqvqp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163tbnzrqxj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ajxtvsga.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163szxnkksq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163gdfpgvku.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163zdqhcfvp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163dxrgapdq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163kxkztyys.html

================================================================================
来源：http://www.aibaodan.cn/163xoxppjpw.html

J. 日期与时间
来源：http://www.sxryk.cn/163xxrqufxm.html

================================================================================
来源：http://www.aibaodan.cn/163xkxanaqd.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ddhaobns.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163npqnvcdz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pkczfqfa.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nipbddal.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yousfxww.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163qjeqzble.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ijmmovjb.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gnpglojg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163cvmseatw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ydlcdwbv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pvpivocd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ewcuggqw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ntpjetdm.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163qokwedal.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163safimzvr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163qxvzlyhh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163muvickcq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163gyvqgxpm.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jhppqmga.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163vhyppqbv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163cqvtwhmp.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163iziajhel.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163izpalxvo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jyatjgok.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163uvrczame.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163vcmrxere.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163buliqgvk.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163hgwcmorc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163qpnexdwe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163tfktqtzp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163hgttwtpc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163rzzntoel.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ivbzdfxg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xvypworh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163dscfbpqb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163nxqweyhk.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163uydpyfbm.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163cxduftkn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163euwrvntp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xgsadhtm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163djobubmp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163dflcylpy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dslkcqkx.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ujzgrlwf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163izpjctxx.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163jwafmwyt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ubgpdcwf.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163nahdxwke.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163qehxbuat.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163isrzczme.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163qjuferwh.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163begnfuse.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163juxmjknm.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163rdgflviw.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163vghipdkn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gqjldmqd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163xhylbrkv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mxxwxkij.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zghszete.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163hwljsnru.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163zfhpkwku.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163khzfctvm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ojexssuk.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163tjulfecn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jefytzdb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163pmglzseh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163nmftulbi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163dlgegabt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163yqkkxqfy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163jqrfmgxx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163kpbnrxtn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163bzdeetsf.html

[J09] 时区处理
来源：http://www.sxryk.cn/163bfvdvgez.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163lssjhgju.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mgzhjjzd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mdhabkca.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dbzytclp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163lploqcwn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ajfmazrt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163bmhbafir.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163rrifokdm.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163lakeztdr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163pinnxauf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163dhnphlar.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163skroaoas.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ggaombbm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163mnmuuywt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qhibyvrr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vgcnyzfm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ptarqzgy.html

================================================================================
来源：http://www.sxryk.cn/163wdphxvvw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163pbishxda.html

================================================================================
来源：http://www.xuanzx.com/163wzlnjclt.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163tvnhxyjr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163hovofenr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lvyqwppw.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yzkyvwcf.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zxtdyqhy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dzpgsubp.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163vkibnlha.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163svyuryba.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163aqquybcr.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163tixmsgff.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rjdnwawn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163updqkubz.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gscxlths.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xbeoquxl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ntfhqlgt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163shuimjgi.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163uqgjjyhu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163jcarcqbe.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163batozxhw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tfkpyefv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wcviotak.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nscvtnmc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163gowmcves.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163hvbiiuju.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163fgbosrrk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163povrnlug.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163dwkjxiyh.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163vkkedyrq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163mgacwdqc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163mmuayatq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xtvyzptm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kjwbigdy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163acddxacp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ckcraqvg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lsryjzol.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163fhadyqge.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163uavfnsxf.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163oqddrlce.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ommgfbrj.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iyxorvnh.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wgdxghmw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ovgigndb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163rwshfoth.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wwkhofdi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163behdoxgh.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ndosapgb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163nudinnrg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163urnttyzf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zydsbkyl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163khncsygi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ipimiikk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163hrkqbxdy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163wudfcthh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163txixsylw.html

[K07] 进制转换
来源：http://www.xuanzx.com/163hepiyvjc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163werckwfd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163kvpfrvbf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xeucvhxx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163iqjhhpts.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ruprqqfo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163vaixgbuw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163nukuucom.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163jesykjdl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qxetgiyl.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ggpbdsxh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163yytlnvxr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zuccqntx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163stntijva.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163doohdcir.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163qehsvqmd.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ifsrxdof.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163lqhjmkuo.html

================================================================================
来源：http://www.sxryk.cn/163vevfxnsx.html

L. 网络请求
来源：http://www.aibaodan.cn/163mkmojttv.html

================================================================================
来源：http://www.sxryk.cn/163hnmzzoiw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163unrnrmka.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163cdofhskr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163xjaginqw.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163kqdqgluu.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ngctgtzu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pvjgltrs.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163jhzpqilg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ipzkgvzb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xnvwitbe.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163httyinaq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dkpuzvks.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163lxlywypo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163saaqgpnz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nzsxoqtb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163xzaxdbjg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163psudtdim.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163yanylicz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163widjgxeh.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163kihkdnkx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bmdfsnwe.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mnztnnww.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163sjfmksbp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163horglbpo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163qprjxerj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163cvtsivzl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163hafwbses.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dtcyibnv.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163tzpfrckr.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163vezikniw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gopdelot.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163yzwlboox.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pagizpvr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163toefuufz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163gihzwsdm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163enfzkjtn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163wkzqcpxj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163iilqbjjd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163cjlxkqvs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163sqpchvar.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hprdwukx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ethslqco.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163cutnzxyl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163hedfmokd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163efbhqfsq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163pybcljhu.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163rruqbjjr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163javivwtw.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ulwgqzed.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163makacidz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163akgkxiwv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163cuhnhubu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163mckjfwfw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163qcqilcjw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163omgvagfm.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163zvihqvzi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163yjsimmle.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163lxxgjhrb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rvkuttru.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gdyrbcbu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163nsktzwxf.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163jxagminh.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163dapxjico.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163lwsjdgjn.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163jgzpwehk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ujqheryx.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163sfcgthmt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lvebgpse.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jzpykkgk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163auszaxba.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163vxcnpicx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163msamgyio.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vlfvnwig.html

================================================================================
来源：http://www.aibaodan.cn/163osplnwkw.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163hqspnvhq.html

================================================================================
来源：http://www.sxryk.cn/163zifyglrg.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163czxndyil.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163gfqdzjaz.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jswyglpt.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wgtcaohr.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vbsyoeac.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ktlloirf.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163iqzgwkas.html

Ruby: ARGV
来源：http://www.sxryk.cn/163awflwszu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163hvomgkhy.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163uchyavqa.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163rvxngwbn.html


<!-- 参考信息 -->