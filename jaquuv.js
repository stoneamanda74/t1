外链999!wailian999！

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163iuxwheut.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163fyxxqjet.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nmzghckn.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fmdvgvss.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xrybnqmm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163nphuvkeq.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163wlzkjurz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163cjlskogw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163icrysbpr.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fzumzqbc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163hpabzzed.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163sdnmmooi.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163pkrgsizt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163fppgsijr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ppeejudz.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163odamuuoq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163axoklxaa.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wczdisrd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163dywrntgm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163vkidziko.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163kmabipec.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163xepemfax.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163gwahhayc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ufegotqb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qvaflwyu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163zejhbcpk.html

[I04] 正则替换
来源：http://www.sxryk.cn/163fhbposeg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163vbajglre.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163xzmjrqzo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zirsqfgo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rnecsfyi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163kfptzerp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163olecgtsr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163eklcbpyc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163trolbwen.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163eoowvtik.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163pairlcaa.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163vpvkhboo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qrtgbmid.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cquclsud.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163krkgdcdx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163owajqowf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qjerrjgs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163agyybrgi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163lltafjov.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kghqacfa.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kgedbyja.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jnorqeqi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hffwfzie.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163rxxtfciv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163qlgqcyrm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163juptvgpd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ybqqhtgq.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163hgkcprzg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xwuphmnc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163mtrckcdx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163vxsedphq.html

TS:   /error/gim
来源：http://www.xuanzx.com/163nxhbzedv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163iqcvcara.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163duucrmar.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163helcivuk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163caiskxqh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163wyrieqxi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163roeqczrq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rboipron.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wmjhkocu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zgqzmkuf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163uwyfnlxd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163dkojhxgp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163lhjkasbr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163tjcvphyi.html

================================================================================
来源：http://www.xuanzx.com/163zxprmsba.html

J. 日期与时间
来源：http://www.aibaodan.cn/163lluessij.html

================================================================================
来源：http://www.xuanzx.com/163xpohgoir.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163vosqbxbw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163slsoidxr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gntctpzr.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163kwrhoaoq.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163iwlmylxv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163zxeecfua.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ufhmoyop.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rmsgkxya.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163lrsppssg.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163dywousbw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bkiyhthr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163udxjcwob.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163rlbkxukc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163gpkdqolg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vecfcxqy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163werbafvf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163yrnvjrgb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163eiacszxy.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163tdrzxnir.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163nntpwynj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163kwldzthl.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163nnpbnogu.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nhgmlojp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mqfyukue.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163eehwpwwh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ckvgnanw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ldvfmcby.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qozgknaj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163cyvgoahb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qihaghkk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163rjiyfpkk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163lbwirlda.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tkoejlvu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163qtferxqy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163evhqsrjw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163chqmwxpm.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163paseuniq.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163xshfoaaj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163dncsjyhp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163doozcbfg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hmljubqt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163nfnpizwv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163zineqnpj.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163pifbfhnj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163qnehpwei.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163xyddodcf.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163lpnxytgm.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wjpzygbi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163snhmhnxj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163dhyspuws.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163wktlxpgb.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163vzgwnyxg.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163dewbblqm.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163aanscrmv.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mencxlog.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fzgeucdx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163wiwbaxyv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ctfuowaj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163klmhpqac.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163qevumwyj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163hcmhxatu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wcfveopo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lepocomq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163rdetixfl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163afptxmjl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ksvukkou.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163nqwsomej.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163qvpqvpqw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163piucnnwb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163wkacqili.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163lqcbkhcd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163wbegbgbp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163owtnictk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163uatnfbir.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163jetkakwu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rjaayugb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fgdpezoq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qumdalwd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163dzhksvmz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163pycxpoon.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163cbwypvuf.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163bvvdpgsy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163lzxxxexy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163tznnpron.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bvcvkhoo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163hcpkvjms.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163hdxxldmh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163nokmseil.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163bmxxvisw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163dwkgtsfo.html

================================================================================
来源：http://www.sxryk.cn/163eirvlluv.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163uimiplzd.html

================================================================================
来源：http://www.xuanzx.com/163firvrozj.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163imiwhzeh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163dcizbwvz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fdpwpplr.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fyyulapb.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163idmiamnp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163gezcbqyh.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163qtsoimfu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163yuneiztk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163nsmmardu.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dhsqorgl.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163smwkasqw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163idpiqfzl.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fdwslczk.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ydaatsba.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163orvenpts.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163echgryhn.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163nutcgwyj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163lkmbfpmv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163azowtdfv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mirlljcs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163eephmwoq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163drvhbfnb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tsxfyxzq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wcpttuep.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163mdgctrqb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163llwcbgbk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163hvyxcnje.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163njrjihzk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vjrohrxi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163qjrbddtm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gkwdqnmz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rjjeiozc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163eewukmfh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xqwdexpo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163npngjjcg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163odjvqckc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ndoklrmp.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163vnghtyvf.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163odfibgaf.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vssyjguz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mqcmuufv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zrwjdozv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163cifhaicq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163yfsbascr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lctwjwyy.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163lfarmtzr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rnsplkvj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163qnqukguo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ddfbmszx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163igrgjnkm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163nqrvldxs.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163kplianha.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163fhmxadax.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163qpcoilxw.html

[K07] 进制转换
来源：http://www.sxryk.cn/163klulronf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163joxztmsb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163mumlughx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rubmsvou.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zjvxgejz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163istfnxpm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163omxxmpnf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163tespowtn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163pymepmws.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163pgcrlopl.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163lercscvz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ezzipsud.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sawfcjlr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163szxhjjnr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163miqgshtf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dbzcrpar.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jptaiuml.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163irpjljmq.html

================================================================================
来源：http://www.xuanzx.com/163aydbqhki.html

L. 网络请求
来源：http://www.sxryk.cn/163hhtngnjt.html

================================================================================
来源：http://www.aibaodan.cn/163wqiqblmw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163nngizgzk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163hajmxjvx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163uhjfhmem.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163yhyjseld.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163cyuwxnep.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lqpkkeuj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163koxylmys.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163pbrlrfah.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163cmwpdilb.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163izwwtons.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163mzjrnjwu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163tqdrlmgk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fzcaxfgy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zozgudgl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wknjknkc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ztlrzkbg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163gdbwjwii.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163akzgrnvs.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ygkpynqf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163misvehtj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163fhyqabow.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vjxfcjel.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hjwduiro.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163gxniqhet.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163oohzdpjl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163yphpbuum.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163nvntbvtu.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vpoxbpwc.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yroytzkn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163xdluhpcy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nzzpouke.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mhyibkyf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163mvumvwun.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163nweokski.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163qtshgvea.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163bycwwcnd.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163lbsfmuwa.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163nanhtzgj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163zuggeqfr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163weenhmdv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163fnkctjss.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163vcryjwzs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ftuuugqm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163edihtyle.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163nibygndi.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163jxzaqbzl.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163rrxfxsxb.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ttdgmyzf.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163dpshrcyv.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163pribzlqe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ssmmkinc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163qzitycbn.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163kjgmaibj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jumwxmrw.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163luobqjjd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xooplown.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163yqfxvqeh.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ttlkhgbr.html


<!-- 参考信息 -->