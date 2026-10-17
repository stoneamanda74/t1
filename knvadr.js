外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163ntyhmhwn.html

I. 正则表达式
来源：http://www.aibaodan.cn/163fsikqbqk.html

================================================================================
来源：http://www.aibaodan.cn/163exfwncre.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163xsiwoakj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ehymuawh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163hjgclyjz.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163athlbgno.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ymwbvrkj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163iwfvgsoz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163eplsfnpu.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163gwrrylgd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163wqrlrthw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ggbtbtgh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163joaanjsn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ewokacib.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163kphejgfs.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163qlawkyeq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163gkoyznzm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163yabhavip.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163bjbnyntd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163amdmfdbu.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163eiolfuzj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tdswbcho.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163wwtusydz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163xwzsusqi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163zyhjhvvn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163iogkeasv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163yuezmfzq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163mwfswsfk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163acuuceai.html

[I04] 正则替换
来源：http://www.xuanzx.com/163qulgcdor.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163tpskmgks.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rqafnogc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163auvsivqg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163alxmnwmc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163mtfjkoax.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163gjvgjqqf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163xxbhzhgz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163xzvdokhz.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163tiorscow.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163boohhhdr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163xuefzztd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163oqmejhme.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wgsswpmg.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lxqfnhct.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fhrxkquy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163doyecvky.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163zoosyama.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163eieyeuha.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tegenmbh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ttybocyb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163krdufmss.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xriojjoc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163qwtmsqtt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ezxopfnd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163otpgidpt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dqtofylr.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163yrlkfpol.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163chqzqhkj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163crclkmki.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163imhblmch.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pftknxri.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163inkfghnt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bjrofnyb.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163xyyuveqe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163pijiedzk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nrpjramm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qexozimk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ibyqkakw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rbewtfzz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163sjaclyqa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qgkzvwkc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163asfnzoco.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ojjggyjy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163yrdhdwlc.html

================================================================================
来源：http://www.sxryk.cn/163wowjtjup.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vgbfdczn.html

================================================================================
来源：http://www.sxryk.cn/163crqpspyu.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163mkhdfykb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163jdmvykhk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163omzczynz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mabhofin.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dpjnmbxt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163pbvozice.html

Go:   time.Now()
来源：http://www.sxryk.cn/163kafxcedr.html

Ruby: Time.now
来源：http://www.xuanzx.com/163uyhznvea.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163fuffolkz.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163tinjummt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163extudkus.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qavkdqya.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163lbomocav.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163svwbljst.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163jjeshtqj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jyecxaca.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163arctxnpn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ufrtrfkh.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163mursfkaj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163myoavsfk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163nwikdfpd.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163spzhygyj.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xhmhikgq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163dodobvcl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163omytytjg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163dhplymaf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163hhxtqrdb.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163cplkicwq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163joxibbuc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163oqzldazs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163uwaxdegp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163swhrhetk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163dellnlth.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ytwfuoxk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163wostwyzy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163dtuzbfgb.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163kcqlfdhc.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163utnbyudb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163kziazsfh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ealyqnan.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ajybmkje.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163unshewwh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163nelutwnl.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kqnomcrl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163prsoarru.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163znbllxuj.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163cnkbrdgu.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163slljfoob.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163hfgagzcr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163hancdjnu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163jimzkriz.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163iouydzyp.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163sssasxkc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163kjgxgiqo.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163kyorvycr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rpnugwrz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ztyxvzgi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163gtdgjkya.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cbulftfq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163drrdxupz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163olaqnzeg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vjxrtkbm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kxkzpghp.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ibclpfbq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163vwuhitbf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ssqzncsc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163pkubvzsv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163dacpazue.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ubpyutcz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163aukanytc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163sthgflmv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163rlqfbpwy.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163bcsqmhjg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ymmrqjre.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163pjteocmy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ugxiygez.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ruwraewr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163wxbvempn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163wlbpaova.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ggxmkavt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ebcdhwrq.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163egocohso.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163hhqokhze.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163kbocukzs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ivpbfebx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163zbpefifc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163kskctrgl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163hmyrzrao.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ecnzgzkq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ysjtirun.html

================================================================================
来源：http://www.xuanzx.com/163khnwlmjg.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ktjylszt.html

================================================================================
来源：http://www.xuanzx.com/163eeqfbofs.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ysxeeuyz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hxnvvoyt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yiwsjqwc.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ecwzqdfo.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163howvfnyr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ddslnwsu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163gpbmkevq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jeqccchx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163gzstbich.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163kdfsvpwp.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163kkqqfoum.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qkkjpohv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163scbiddmb.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fsrehxwc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163saiicmac.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pakledpy.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ckxlatyr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163cgmeeduq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pmvhzkus.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gylzcxot.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yrvvwfky.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163secvblmg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pbvgtdsp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163alnutghj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163yzcmomts.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163kcvwoixa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163sxwltkun.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dthhctnc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ztkjmsza.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163wdoctztf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rirphecm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tsubnypx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wtjubahm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jhsysecb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163lsgmnnau.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163hnmysiym.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163pogethua.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163vpmyvexo.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163wyvelyob.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xuluhijn.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wqrhzrzh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wciexxmj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163kmdwmrik.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163guowcamf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163talpmxjh.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163svmgrxyq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163efmazxdm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163iotdbkae.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163eptlvzkz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dllcbqxe.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163vmqrvcnt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163fewennmv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163dmdrxydf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163lkleohya.html

[K07] 进制转换
来源：http://www.sxryk.cn/163uhrdcgzw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163hslwwzev.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163wibzzivu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163upyysdnz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qdbtcspc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163beluuiof.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163gvpxycvt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163jyojsycn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ygaipizf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163sicqhvrr.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dwbezmvb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163nlaikhtn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xmmgtajq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kdidvess.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163jklqpbah.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163rlkdends.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163pzyidfjz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163vekclswl.html

================================================================================
来源：http://www.xuanzx.com/163bkqapblr.html

L. 网络请求
来源：http://www.sxryk.cn/163rebblsut.html

================================================================================
来源：http://www.aibaodan.cn/163ytondoxh.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163nnidiuab.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163hwzodgkt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163sevfkacc.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163lufeahvz.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163luxixymp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163nkscbsai.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163zzbcirgf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xdfzhqvw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ucjsnzdl.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163uzlmpzfo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163cpujlvgw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163kadilcil.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cxrjbkft.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jwnqycor.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163izuzzsdw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163sjxiafjz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163tqfqesfp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163cxkxhykt.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163xzkapzgp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163qxtlkskb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zjbbymxr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bmnoyspj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fvnnsddy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163zmsivgyc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163snyrqasp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163kzwcotsc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163wjknfgpx.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xxklgpid.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163hqmylhnu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163alkszupo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wycfanxr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cxuhdiru.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ouqcmgaa.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163zpczczpc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163wtteknyj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163delrcsni.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163kdgoohag.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163iiupufwj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163sdexuicl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qypdqpik.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kcwajtyn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163hsdnsevu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163pqirnzok.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163hdqobpij.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jluwujju.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163kprrysxb.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163axgnshpl.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163cfgbmxqp.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163uoeagqlc.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163oaapvvsq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163uupxyjpd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163pkcougrf.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163uuogoirk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163kemrmwpa.html


<!-- 参考信息 -->