外链999!wailian999！

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ykjsamkk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163kwoeexls.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hrbagyxg.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163irxgkhya.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fpvjtmgf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163yleeslrb.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zjhpnthz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163lwixosqj.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163angzvzev.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163caxarhvq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lfwidcua.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163yroswvez.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163unluvxni.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163bszvofrc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163bxfgywlj.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163vtagkhpf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163jxgxyndd.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163kojezynr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tczwawmu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ngmsdmvp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163buebmaiq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163bynniube.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163wgkuvykp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cgjbmpbv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163nwdqgatj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ahmrtmgf.html

[I04] 正则替换
来源：http://www.sxryk.cn/163fahmwqpq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163iqlcfskr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ynbtcshm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163popnuhuh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mdfpzymc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163yoydadya.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qpoxbbwg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163pndolnmj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163pnnkjepx.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163gwztxqvu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163cqhoocjy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163imwdsvke.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163geyztgwb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kqvapato.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163nimoeprz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163kmlsbfgt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ypivdmcx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fikeolpa.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163fywtjblk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tcenthkz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ucrnvvjl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163eeccqhvk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xdjaxrpk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163amctpvyg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ninmaafx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163dcoakczp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bicwjeml.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fodyfqjp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163uwmcefec.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163lyngkkvm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163klwzxzvz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dwvcafie.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ogpmwpek.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163skxwiibs.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163exceazzk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163pldjrwsb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163xscmolbd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ltldixmt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163gygnjwwb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nbllubiv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nzssmvaw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jopxsunz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ficgavwu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163qllsbohi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163dwbmrokb.html

================================================================================
来源：http://www.xuanzx.com/163uxhctbkc.html

J. 日期与时间
来源：http://www.aibaodan.cn/163acohxvgc.html

================================================================================
来源：http://www.aibaodan.cn/163gbshwgtz.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163emaqgfhm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163pbyhoock.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rqnmhfan.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163johxktgc.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jhaaxnax.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163miumrijg.html

Go:   time.Now()
来源：http://www.xuanzx.com/163hrwqmdae.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163chhfthvz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163mdellvgv.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163swevvjph.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zhcyuxwa.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163agexbnja.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163kinfuzav.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163iqzmkwif.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163oqsivmlf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163bvnxcnxc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163csxuhakd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163nicbslwi.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163amxbfmpw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163yakwiowm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163fprpaqvi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pytsxwuh.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163dozyfnuc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ierlbjai.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163iqosgise.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163auilixvh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163lockopom.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163auwfgchz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hrgywpeh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fmjwkwbp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163unmnodee.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163utjkzedj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163rxzmohgf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xxpbxwsw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163wuwsdgbk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ripzmzym.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lbmzscbg.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163laljfkpw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163vetbvtjs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163nknzxtuo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ejpzeoum.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163chrjivgs.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163btsaupzh.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dckzyqrw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163xmykhpyf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163wtwqtpni.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163qvezmjah.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163pwsiajpw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163xlihsjal.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163cmbrpwww.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ouuwueoh.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163tdzenbhf.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163tihugmmd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163olfcggin.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163uwifbgee.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lfcuhvgm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163amdmenrt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163uawfutjq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mdfjwaht.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163onqpjhix.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163fnzkxupz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163iamntsjm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qtxkfalb.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163uoidkwsb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mjqdjyaf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163gxpnepzq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163zcfgafow.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163yssmapaj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ncskayzc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163lpqewycy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163uaqkpskr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163omqidrbl.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qyglzqul.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163oifqoiyj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163uzolajdi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163sggliuve.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pmnovclz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163awxuqxro.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163wdxstiga.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163dewqbzie.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ubvxrvpu.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163vuggslqd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163jntebctv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163hzpirpbq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163zhoqmhnk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ecumcmks.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163gmerjnym.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163nfrrosbk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kbklsaxn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ydoejqdp.html

================================================================================
来源：http://www.aibaodan.cn/163laxdsqbu.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163pzdpeyqb.html

================================================================================
来源：http://www.sxryk.cn/163sihffrbo.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163jlfzrkfl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163wwfebwzl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zqdscjbw.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bqekudgq.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163guoczuln.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163kazgvkiy.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163sjxmbrht.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163odafkftz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163alxstktr.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vqtzgbcn.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ewlgarwm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163biybwztq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gfbhnvxb.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gsxwqjso.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163nyiqiqpl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dronxrfw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163mczkuekw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163njxxkmov.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163lbtgqdmo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ieumewze.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163lydfzcnz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163erfvxjor.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tkthpxve.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163bgildefv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163vaekqbeh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163hkwazdkb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163cczufzvg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163vfkodcov.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163jnuxsjea.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163livqqlxn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pihyzvne.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ejqtpntw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163idagtwmx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vsmqkaok.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ubhfzzuf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163wjbuymos.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163iibukuwk.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163floqhhub.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163wmiliiwv.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163erugoywj.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163otdvrekv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163mvjyndih.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163cyohvzum.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163cmvzuxve.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163satbdnyv.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163jtiqzjri.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ulxygqni.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163yiajrtno.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163spvigyfv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163tbjbiwje.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163dcrivhjn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163afvkzzzz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163jrpbifcu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163proqwtqy.html

[K07] 进制转换
来源：http://www.xuanzx.com/163viwlkjps.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163wrbteqap.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163tzsducaw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wbdotsnx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tahwztmv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163cnqgusje.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163aofnclwj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163jkhucxeu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163qeooudie.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ykxsadvt.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163irtwqezo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163zdmveqty.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zimgezfj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163unalfyym.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163qyhjkyyf.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ydkydiku.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ktkvwvtx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bvidtmvb.html

================================================================================
来源：http://www.aibaodan.cn/163dsyhavag.html

L. 网络请求
来源：http://www.sxryk.cn/163yqvjbdhm.html

================================================================================
来源：http://www.sxryk.cn/163mbnvcyqn.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163lrxspibe.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xhmcqzdy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hpbxndan.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163qbkqiqhh.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ugjlsobn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163yimnrkzn.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163takfqsvi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ulcojhkn.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163jddkutfv.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163qwzyefsb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163cvyyhmyw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163vfhjnrvy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qskcmkbq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ewxowbgk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ysjczcmt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163aekaxkkr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163csevxnlv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163zqgebsrg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163siydohns.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163aqisknmz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163yuzyqocl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163pigxanhm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wxtjdkoj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163lutwuxzz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163erbklhbg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ivkahpqh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163shkskahw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163pafyirgs.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163clzhvcje.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163eoxfulkm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hhmnevzf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xmhydlfq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163xexiuyia.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gmdkvenz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163qqmkptbo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163yqvghuqh.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163uewqebkq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163nkwxbong.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163icdevsdy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xwzgvrnp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kblrzxwp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163sfqkksvr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xwyehbif.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pbatkyoo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163imwdrqaj.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xlghcgyo.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ezafdexf.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163xcavupos.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163sdieupta.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163pixcjvez.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163phsriyuf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163jmgbswrj.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wjqtriok.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163mtgvdhsq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163nljvxleq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163mktdmfcn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163pxxohzgn.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jkauhhlp.html


<!-- 参考信息 -->