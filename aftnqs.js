外链999!wailian999！

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163yjqyravd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163qkiiknwf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dectehhg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ztpnjmve.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ozfhydap.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xgbdiiha.html

[I04] 正则替换
来源：http://www.xuanzx.com/163azwfgjam.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163lbgjmxuf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163gotjgtbl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qafosiqn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wvvglzbt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kajcepxg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163qnmazfzg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163wmeoklon.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lcymbpuf.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163muqtmsig.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163tgchheru.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163fzoement.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tbpyuaqc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wgixefqo.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163pquqcbof.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163mmxsekqy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xhbykhwl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163watoeyew.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163lavysodu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lfmiktnr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163epracjub.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163euibgdqm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dsjlvnql.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163lfusuicg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163bwqgjhje.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163tgomjftg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tbtwlkft.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163nuxzasla.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163scvwodvz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163iltovdly.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jbxseyoo.html

TS:   /error/gim
来源：http://www.sxryk.cn/163myvbueta.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163yyxpwcin.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163sfhwmrha.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163zdqeyizd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163teeyiidv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wvxuhjai.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163tpikotaq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lvndejeu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xkofqpxy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163sweljvcq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163vmuclxiw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163cxmyfmcw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163zxnfteeg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163vdjfcmoh.html

================================================================================
来源：http://www.xuanzx.com/163gsiwsxxr.html

J. 日期与时间
来源：http://www.sxryk.cn/163wcigcxvg.html

================================================================================
来源：http://www.xuanzx.com/163kpfjcoau.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163yjeohrpx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163tezcitra.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dmnbbstu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ckrliegf.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tlocltxh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163qxqihlhb.html

Go:   time.Now()
来源：http://www.sxryk.cn/163pixcdgss.html

Ruby: Time.now
来源：http://www.xuanzx.com/163lukpsjol.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163fjqphokw.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163lzugaywz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163txbysqji.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pexvprfz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163lwjrxrts.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163olkuleyk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163rnihwidv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163nwjubcnn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163phzclotv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163hmgsabbz.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163pjwvxmbv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163klkcfbgr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163glgvmqyb.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hymllwlv.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163aqnxqfdd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163lthsvjdm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mhhysqyt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163uwjhmwey.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dzhggdpe.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163rnwqiqdh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163eeagsdqh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163aoifvzdk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ntmyyzxf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163jluwxsci.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jshwczub.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163rrxpdzqm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163rmtiuhum.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163kvlptsbq.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163onqdajww.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163rygnqogy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163rvbovqzc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vkpqqpeo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qdquzobh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163mizxirql.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163jxghbelb.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163fvpiujch.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163jdrclfwg.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163vshvgvdt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163zmljpkaj.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163rjmdjkmn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163sutiwfef.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163xgswjlsb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163blgczcvb.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163gekovopr.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163nobmmcdf.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163lmnfkzrr.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163pkiyggnm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lknibefz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163cdleeszb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pmupskya.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ktzkxsza.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163kyfwpjhn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163pzjbpcqb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mbowwjiv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kkabfcfx.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163cecwvreh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rprsjqqp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163tspgagaa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163baxgpxva.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163mmlihdal.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163gsygbvmv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163lgalelfp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163rbchkbsx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163oimptuax.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163eczluevx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jduofpkt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163yusylkgf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163goeljzpw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163obobipdw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163tyjlkpzp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163tndrptly.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163yntsnhad.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163znvvjhzm.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ezkzsaxj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163zgozdfky.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163oybdslgb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163sogiqkfg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ujksjmgr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163mankbolv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163rkocaiav.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163fkwxyasx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163varjsonb.html

================================================================================
来源：http://www.xuanzx.com/163dhcgpbln.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dwfbduwo.html

================================================================================
来源：http://www.aibaodan.cn/163codvyjtt.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vrpofygg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zryfijzl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fcgjklzu.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yazipcrv.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163basfpybp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163sccwxgdt.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ynfbgsvd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163amuftixr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163spockmnq.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vxwrlodn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163nuqeuabh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163rpznthbx.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163uucutyuf.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163csuqsqgg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163elxkqxmo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pgglbbfm.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163emsvytzq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ksohwkpo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163bokhktyx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fcznonwr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163nmgwfmyh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dpgnounq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jhybpjys.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163xsbxkrgy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163dxkcjxsl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163vaxupqen.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163eidoxhye.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163wfyaatea.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163kxtkgaqc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163rsoxmqyb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rfhnzcmh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163uujipegm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163sxehtsdd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dgbgbaug.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ffylwmto.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fatbkiqr.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163oaqfbjhq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163nabdpuzd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163sfvddewo.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ovwsgcgw.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fnsvdkwb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163vsjhegfg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163vfdbunaz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163jpxcmcjm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163premmtyp.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163belvbwyd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gkjqmabn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163kjyysqpm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nywggkrd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ucmtunwv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163tmchwhql.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163mvukicvm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163gniczwbk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163egznpoxv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163izpxdjqv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163jnxqjjfs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163hsshbkgl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rnjjdpwr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cvacwwxj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163medhvfks.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163eublttwu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163nnomzicw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ybdsmzbv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ayrzlzvm.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163oftsivdi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ohltjzxh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tutdocdh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pnylzwqy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ucdrbmdh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dwalumyi.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163hfdepobv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ctxopyyj.html

================================================================================
来源：http://www.sxryk.cn/163skfnkohs.html

L. 网络请求
来源：http://www.aibaodan.cn/163qrjfseno.html

================================================================================
来源：http://www.sxryk.cn/163clevmeqs.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zxvgwasv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163cedgitlm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163sjgraqjb.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163whsjiatj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163fntcnqqg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163tcdyvugy.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163bdnnskiu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163igqurtsi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163bdaooyvh.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163cpmwyiyh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163hpecdsck.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163nwtxhfgm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cuflvpuv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tscfwhpd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163rglikcqq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163abawnjfx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163dcdypgpd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163dzbnmtso.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wrcboark.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ivojegii.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163tbbdqyxv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jyqribjx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qyimchvk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163itutothq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hylxvxxi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cmcpgzgj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163xnjzjwex.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163jkgojsjn.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wmnarozf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163cuajollm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gdnlpyla.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lrkapkqt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163vbttntts.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163mlpzxnom.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163yiqunhvj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163xuywbanh.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163qtzipkfq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163eozzrbcy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163gornvgvz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tcoqmgon.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163crocgyfc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ifkiofpj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ltyscaem.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ywnfwrzk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ykhrrcei.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163shjgibwf.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163htpmrmqm.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163urxccqfq.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ivxvnydy.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ifvktjzj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163cbjiuccr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163rfdohast.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163dcqntyrs.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163mguotdeb.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163epairnly.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163yttknaot.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163coqtmgti.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ghaimofv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nbsuheza.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163oobcvwrb.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163nuqopvia.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163fdugansg.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163afsaojuw.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163tssnkuzp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163vipaphoo.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163umaqqcxn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rajpnqvb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tqlakbgj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163bypbabce.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163zydymjev.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163rocsoibh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163riflrhfp.html

================================================================================
来源：http://www.sxryk.cn/163nwyfveag.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163xeavuyoc.html

================================================================================
来源：http://www.sxryk.cn/163ilanpymn.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163iabvdoru.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163hfstoxmu.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163pipipnhp.html


<!-- 参考信息 -->