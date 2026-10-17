外链999!wailian999！

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163yqqcambt.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163twioocny.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163pigqxndh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163mirdbsps.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ecagcgnu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163kcjjqrmj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163kdeuounj.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163jwdlarkg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ezyenmty.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163lskzfyor.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ogubrffx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163vpkrndrj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163zaztbnat.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gqdrghvj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163pkkyfwgb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163vwzeznpz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163rbmwnllt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163idxtybjr.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163vcpvftko.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fccetduo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tvsllerf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163knffdroz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163imrsnxtd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163bikizdom.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163dehweyvu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xtacvfvu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163cxyoexmg.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163bhrjakmj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163hndeektp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163lrvypitk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163obmxaevu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fahngpjy.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ncuqrfih.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163duproqdx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fafnkard.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163apfkzhke.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163sohjutgo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kmslidyw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kdrxgstt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uaphxery.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tfipwjlh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163byvfdzho.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ruhkemio.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ugyfiiap.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hoseytqs.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ajesvmit.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163lvelzpjp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163wsodtner.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163tdpoqbtt.html

TS:   /error/gim
来源：http://www.xuanzx.com/163hwkzjtvp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163gizjsrln.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163xyevpmlu.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ekbofwqm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163uijvtjfx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163vxfsyqit.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163somdezom.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163tsvxjuwr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yzztwlcw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dxtuooym.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jcsdqrfp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163dlsymfzh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zezyjxof.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163isofapqh.html

================================================================================
来源：http://www.xuanzx.com/163ihlduchz.html

J. 日期与时间
来源：http://www.aibaodan.cn/163kmbwkpzt.html

================================================================================
来源：http://www.aibaodan.cn/163xnbfewwn.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163mebuaypr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163pndcpeku.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163drapucby.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jwacqkau.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mfyqnleg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163kywzycne.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163xrnfonjx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163mojgzcaw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163yaptozsc.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jstwhhni.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163iybjbeyn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163azlnchqb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163uebexmcl.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163gzhtkxgu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ltlnlcfn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vgxefslb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163lkljhfgw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ateoobfm.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163mrswzjfu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163mweqsbok.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163zdfbxwyp.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hgiiwwsb.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xqcumrmh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163jdpxaeup.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zboqncml.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163srtwrvmu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163hipazmtb.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hhdvahuu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163lwweuvtn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163saezzvdq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163olnnwoxp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163brumxxmk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163sthdqerb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163mxcibjup.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163pvwzevtr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zvdqgnzk.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163zvsyjqdj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ueziyvgh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ohxfbmif.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163czxezqub.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wnlbjmge.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163hblporld.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163zovbjobq.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163tlcsjadm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nlkekmkw.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163muqzufmz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163mfbbzajf.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163zcmkyqzo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mjxsnjvp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163iykempuf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163itlgbdyw.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ibxfkzty.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163pqwdgtiu.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163zgjzjqsd.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163brugygbg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fbeshkss.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163fmudonoi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rappoqst.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dvfbsheq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tcdgtjgx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xkceklcf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163aibqtcvd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uyyrjzvr.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jkuvkkws.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163frquouoz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163cdnapgnf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163qvazbvmf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ettaggiv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163nctjngdy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163uakwuphb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lkftvstk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ybemxtiy.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ckvxwkcl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ihufnyjd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163oqtmpcgf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163flymexpv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163crjnoojy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kpyomrwb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163gagzjbdb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163daolajuf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163nsypwzyg.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163fymxxctt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163rtypphdy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163jomkqoxa.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163gvyvxawt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163sahvaybu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163rnmsykcf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ivloflml.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163noycyrid.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163wziysggs.html

================================================================================
来源：http://www.xuanzx.com/163lmnckpgr.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163biskcgpj.html

================================================================================
来源：http://www.sxryk.cn/163vlbvqoxy.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163eckazdqn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163unypzvdq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wnetjafu.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163alxterfw.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163klvyywyx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ogtkrneo.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163radskjxr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163zkhpjgjf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ssrgefgc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163mmsqdozb.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163kywycxkw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163gddxciqg.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kbzbtpuw.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ygbrpiqh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163jijaprgi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zspezjww.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163invxphcj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163vaadbxbi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163nqgqkjxq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163xqegktxj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bfrtnfve.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jqbktofa.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uigzqdat.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163xsxcmlgc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163bankcthb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xfktbiix.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163rhckubzh.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163nqgxfsxt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163yvlxudsj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163zccwrusi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163myiwgliv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163npecfbif.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163eqdpwmqi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163crtiyuil.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163hdofwjdy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163dnsmywtj.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163kjaalaup.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163lcebehpu.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wpdkhxlx.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gxilqmfk.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hxcjzavf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163zocfjkfp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163caawquqf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163omdssqne.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163osyepuzn.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163zarboygf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163vsxwnmuw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163iecubikv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wgxrekww.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163oppduhea.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163gwzmxbnj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ctlpqwxa.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163qxxydinz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163auocfaqx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bykeocrr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163csrdjxeu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163uolmnjvp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wmdsvlwm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163eokywhqh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163frfzhexb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163cwuhukco.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163kdejqely.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ebjvwqpu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163dsolmxxz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163qbufcjxr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xeqwlmgw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163sywqewyk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163oasmoeqo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163odsdkmgh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vwlnorbn.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163pobrlszh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ypestiep.html

================================================================================
来源：http://www.aibaodan.cn/163hbnrovhd.html

L. 网络请求
来源：http://www.sxryk.cn/163ciaexewd.html

================================================================================
来源：http://www.aibaodan.cn/163bzbhpvgh.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163qpgvlunw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163xhnwukcx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163nldynpey.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163lqlthpty.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163fwhuewav.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163rqluucsc.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163txpeczgi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163yzbhdlds.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163jaotdecs.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jlkztamr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163qqccwgzm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163uextgwlg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uuaifsvm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qtbkuhhd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163adugcsdm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163rmsatexo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ipfqkhnk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163uwjxfwll.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163mceimpvl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163csinjibf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163keglpged.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163wsermogy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ghrrawif.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163kehnqtre.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163fhnuwcnh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163vfemcjyg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163psfzitjd.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qvmjbrtd.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ylbjbeae.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163qymvpsup.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163prcotwwe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wvehjvnc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gevxblmc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163xyozdoig.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163bmxwmdxo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163gdatjuli.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ynlrpwtv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163zluuunhv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163kroqvnfa.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163aunkobcl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163nnehudrk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163fvbdnyta.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yivtslfr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163heuizzpp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163nsqcfnyf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163vfbuzuzq.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163evlzmwsx.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163kwbdtzll.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163vzfipzvg.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163xlfsbfzj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163cyyrghle.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163vntsmbft.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163npcegbjv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163pyowgtxb.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163eueikwak.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163zpjmbtnm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dghavwds.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rrgonjfk.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jgxbinya.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163kxxaphhe.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163etxbxjik.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163eoryjinm.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ecrmrsfu.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163pegehbht.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163xgjtjawn.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163jzqyhfow.html


<!-- 参考信息 -->