外链999!wailian999！

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163dsoswyps.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mqmnorvn.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fxrmntom.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163tcvpxjbk.html

[H07] 断言
来源：http://www.aibaodan.cn/163ccatsybi.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163gpvsqmho.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163rdwebbai.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hmrsmwgd.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pkgusvfj.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163uhflwuby.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zccajuyi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ztebejaa.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ikpuuwmh.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163flgmvynm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163lxwfyexk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163qltxvmnh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163yvnvfxpw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163jzcsqmyd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qsuglryn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163iuaecasw.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163frhtmgkb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163zxzhbrpw.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163gwhwvjyk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163pupfkkoh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ruqqmfpj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dkmuydec.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163yfvehtsq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163udhfanyq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ijkqngid.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163fyabhutp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163hbfmibei.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xonpgwae.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163fxyflxlw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163moplutbh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wbhmabir.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163aldbxtrp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163yzneenrx.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ohynvcxl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ijhveysr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163slyeqkza.html

================================================================================
来源：http://www.xuanzx.com/163zzhraouc.html

I. 正则表达式
来源：http://www.aibaodan.cn/163svphyqrj.html

================================================================================
来源：http://www.sxryk.cn/163dvjlpmdc.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163zuojgblk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163bidsobrm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163xxenweys.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163oqglxrvt.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163cceftgrc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163jktqfrho.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163pdazmtky.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163tiurihde.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163nnxhburd.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ltnwbwls.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fwsawltq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163fchwjwmm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163fecepuqo.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163knbivpuj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163pdyorccd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163tjfacbts.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163aqyrlsrc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ihabohdw.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163mzdjghhi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163dforrmil.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163qwhviucd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163imrojsvl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ypnkqllo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163xjuyhref.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163lmptcwws.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ioedjfng.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163qijivtim.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ihrdpiqr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163rvyqehmu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ztzkkyxs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cootusvq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kxdhbvky.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ttmaaass.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163opkommhv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163qedjfgkt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163bgoepxzb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163pabdgpbl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163vbgwdndd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163hjehstxm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163poiyhxlz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gydmbiio.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zshisagf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163uhkbdfmv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hvoddgvv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163wbjwumpw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163pqrlgbge.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uonzwnbd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163grtqwplx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163osqdadqm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nfatklxi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ygqinzcq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163aldemmpq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xwyocjwg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163swtmtaij.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163gxpqfclv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163coyfvgia.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163abincaoj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163uxmfxkbv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163azkjmxzg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xrexmdut.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163klnllrok.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163dbhkdhmw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163yfxhqtfz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163niebsqio.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163idupuuai.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163xeucbwgx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qfotajur.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ryxdxldf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163kdmwatuc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163urxahmpz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163vqbjobsz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163iflxcfos.html

================================================================================
来源：http://www.xuanzx.com/163sxxttwtc.html

J. 日期与时间
来源：http://www.xuanzx.com/163bzjezzth.html

================================================================================
来源：http://www.sxryk.cn/163grzfsxqa.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163gfwiljqq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163cttrdmel.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163darjunlt.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163oadwkckc.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hijzrzik.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ivufodbz.html

Go:   time.Now()
来源：http://www.sxryk.cn/163eznyzuhq.html

Ruby: Time.now
来源：http://www.xuanzx.com/163azbtofob.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163eoojqqmf.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163lbjpwhib.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zloojnbk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cmnvcdyd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163moktzfuw.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163wrugenue.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163veiwbaxu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ehphdulf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mbbcwhuy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163vozjnycy.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163aiadrjys.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163rqxkreul.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163bnywoerg.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xehdjtky.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163okkvexwf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qfpwfkua.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163nmelcyvf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163icxosraa.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ukmpekhu.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163zwceiwcn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163hpvpcwim.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163jsylmvla.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xbiyrgxt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163qdgqkvdy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163zoparfnp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163nyyiyfjj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163xfgaadhk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rqifcpbx.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163kcuqsark.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163kbpdzgfp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163jtvwlqsc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ubgrrfnn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qcdzbkfw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163vlosihgh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163eenriyfl.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163vfwoihff.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163jirqrbvq.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163gnawhwxs.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163tyizfozi.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vciawere.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163uouzxagb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163kmttpcif.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163gqsidfqu.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163izdkofxe.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163xyoymuie.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163myqxqnpu.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163cqpvnmbt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fcdlhdho.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163zyflsovf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rsdtlioc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jpkaaoyz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vhjbhucp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163imxnypsi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xnclqeee.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uwuprezi.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163wxvygtok.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163nbkwjncs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163hibqqadj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163vxvldsyw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wjuyrgjc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ahowezmf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xnstnwxj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163zmwonpfn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mfvncqon.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163yucmufly.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ntmsjohm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163xjwchypz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tceyskqj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163tlukioks.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ojdemyds.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163aznjgxrg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163atlysacq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163chfzlier.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ciatqbun.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163jyhxbskt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163dqoaugxe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163undlfrxb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163imfdgtvi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rnszcpdp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163pnymujhv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163uizxxjnr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163medrkxqr.html

================================================================================
来源：http://www.aibaodan.cn/163tpvqkcdp.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163hjyulnaa.html

================================================================================
来源：http://www.sxryk.cn/163bugzvige.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163guccduvy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163auedrbou.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ykmgijii.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wtszicrk.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wlccyoyk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163reimfmpg.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163qumaafcl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163edzugmrv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163lhfezujt.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ptkjgivz.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163jqkhexeo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163erbyntkw.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tsbylkjv.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mtqxmawm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163obbnxrqk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163npwfnigi.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163rcnwpkpz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qjwctgfq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163umeyjydn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163vrpnuprg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gzhoqzzt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lxjsfrsq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163htgckqix.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163khfzelbi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163zrduyzic.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163oxmfcefj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163fhjhkpuf.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163crmroxwh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163cjmzutck.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163slszwdkv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mziswfmw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qenmtajq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163xvieeliu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163olmgctlj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163nwmttyxt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163zbmvxcnx.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ybmmjpnc.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ilylklme.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163xfprtgfk.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wjhqzubj.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gktxutrb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zkjwugcf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163xgkcjqvp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163dswxggsu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jcmtozfj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xqllbrid.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163zjsuibqq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163kjbwppsv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mtnoejrw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ufnumqlm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ytskubvj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163mbeyotjs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ctiximsk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163eckftbcq.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bpqqrafd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163kjmlyclh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163fxoflzdu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ikpkxfrv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zopiyruq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163rfkvlcbp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ikxnygce.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ztznfmpx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163hqxnwtik.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xjkxnmde.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163aawmqzub.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163gjqjlgrj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hlzsbipa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ttmdflmd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163xryeebzu.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163fuulfzwh.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163dwrnrnmy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163zsliaenm.html

================================================================================
来源：http://www.sxryk.cn/163ogpprjyp.html

L. 网络请求
来源：http://www.aibaodan.cn/163dyhnafiy.html

================================================================================
来源：http://www.xuanzx.com/163hjauzviq.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163nsvaxgdq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163gzqbmyzo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163riwwkhha.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hlatpqfu.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163dxvdtpzd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ysnjdswq.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163nqqvwlyr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nsofczle.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163bcinpfqr.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163somxeywo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163piprpyzj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ieyxmdum.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163inzgmkri.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163luwwjbjn.html


<!-- 参考信息 -->