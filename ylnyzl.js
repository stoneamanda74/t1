外链999!wailian999！

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163asoqbfmv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163metpxpww.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163gnhaiehz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163fvjvfswa.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163diueezol.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163rbqowrji.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163kcnqhbki.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163zipugwhi.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dzrosjul.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qhtsclrt.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xnsjrlrs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bwylhurk.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163qvkdstlg.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xttuarha.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163twpiogaj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163mqwxdhhw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163kcnrygcv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163siqnlqkx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ndbihwhd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163nxsvtndf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ylpejrzh.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163dplldpgc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163slnukkxh.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163lloocaag.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163bqdsffua.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163hxafyzgu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163msapuwaw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vruktpvx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163mqrgjeou.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163kfkdymaf.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163poimffzu.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163jurnjdpg.html

[H07] 断言
来源：http://www.aibaodan.cn/163muajzhjm.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rkzstrvg.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163vuletpaq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nkzorsvi.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163byeskkid.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163zazttxib.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163yfedovex.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163xxgfrarf.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163fuvgffgq.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163pkvmoukl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163weemjune.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163khdtzyva.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163lguwcwwx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163uyxhlstz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ijsxjpem.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163irfhyarf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163cqekzccf.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ueemuyuf.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163zupmzdsc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ewbryswp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163cjgowzdl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ldgmtmqw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lzuajuru.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163lbxgzohz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163krduaqxp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163dvuooifi.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163cvefqmsj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163zyfbsxkh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ugfoyhtd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163qbylteal.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ljpscolj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ighqulic.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163muomybao.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163lduactmb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163yxhxwado.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163hutxpctd.html

================================================================================
来源：http://www.xuanzx.com/163yorbnxis.html

I. 正则表达式
来源：http://www.sxryk.cn/163ntpbevbs.html

================================================================================
来源：http://www.sxryk.cn/163qizskafi.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jtfwhlox.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163iuupxmej.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163vjlcztxi.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qyfdrkaa.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163njuptefw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ionehfkz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163gwauiyal.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163bxjehfso.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163jfcsgrgh.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163oecjnnck.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163hkukwrrt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163anoanyec.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163eaqgdzfp.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163lqqnythf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163wxbmzsjr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163tvnbokqh.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163hjalpiyf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163dbhnpvob.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ildpuhtm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163tcofelrx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163onsvpdwk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163rkaphsnd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163nwhorpyj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163hzsisvci.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163cfzretxt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qtdzdjbe.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163vpielvmw.html

[I04] 正则替换
来源：http://www.xuanzx.com/163vjdyfjwd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163yabzyhbx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zafqpiak.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zpawdirx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xapwmrqp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163kbjmnlwm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163mbupsolu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163roztrzyc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163byizefxj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ftdgczfc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163samidbye.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163gmkgmdbo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yjfjjdfc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yyrzacxw.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xtlqdpom.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163fifgvcpw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163phitazzq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163muswbnfn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ibkshwbb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lwqtmidf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ivznpezw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163focrtlyi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pzlzkjdl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163qeeyroaf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163lcwboaaa.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ktkoqfrk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xtauhznx.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163mpfgmycw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163zmgmjkwi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163loylxdbl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163msbucygz.html

TS:   /error/gim
来源：http://www.xuanzx.com/163kzklvjmy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ilqyxlnp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163nppxgrhy.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163nfzzboei.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163kcfhtxnv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163eozicmrp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163yppplqqk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163sdnvrdqj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pvxmeqez.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163aafbgapq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ofezppaj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ocyygeql.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163efpgtjui.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163rjpnzcfm.html

================================================================================
来源：http://www.xuanzx.com/163xpluvxro.html

J. 日期与时间
来源：http://www.aibaodan.cn/163bointwls.html

================================================================================
来源：http://www.xuanzx.com/163etpynmal.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163jcdxhxly.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163bnqlohcb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jangmtnf.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ryjtgign.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163czvjpiaa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jrjzpzpw.html

Go:   time.Now()
来源：http://www.sxryk.cn/163fymfyvvo.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163fuurrfhc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163nitbjtbn.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wahsepcq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hjjafphn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163scfjttrh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163wqtpmncg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163jwahnzmk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163rldjaiix.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163qbdwiuze.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ywzdurcg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163sblwwruw.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163iljmylyn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ccfgbpes.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ihfhjivm.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163sfjkjics.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vjabgqqo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163omutgitw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163grvhhavs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163mevlzccb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ynvanrrf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qeyzmxrv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163yrubzewf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163dtczipgc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163pxchqulz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163avzpntjr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wjsdlrrx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vxgfnfpg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xnnoocdb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163eqrvjers.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163oentkdet.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163yojtjjpw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163zrxlcsvk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tbemvvwr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wqgmpgad.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ikeqfyam.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163hcfhyevm.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163bvwmekde.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163pwuoliel.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163geifugon.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163zpgzimdn.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ijoilggs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163sqwwtkve.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163kleqbcjk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163zbrvhong.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163dpbyqvzt.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163vqgdljuk.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163waqbtggc.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163hbaqpvwq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cxqgwriw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163rcwheysl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163cklpafui.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rogyzorm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163gwyoxaky.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163lyedvzcv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tlqykdvb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163sbzjvylw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163veuregzv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ggnmyhou.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163egrwawau.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163brpnvxdm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163zxxnjosn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163zppgyhbh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kgqbqxel.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163tituvter.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163dapndous.html

[J09] 时区处理
来源：http://www.xuanzx.com/163hskuojdw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163kkmyzagu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163fhqomsnl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163okcadwmg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fpnlnkva.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163bqvueuum.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163jzqgvnyq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jbcyiamr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163eyoktght.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163rddoaoqu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163txhbjgbi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163wtqrhxrk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163vekrxiii.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163vvypfgth.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163psrtqirr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163iyzpnchx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jalhbefg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163fwxfdstv.html

================================================================================
来源：http://www.xuanzx.com/163ygizysqf.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jltevngz.html

================================================================================
来源：http://www.xuanzx.com/163jtuhykrg.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163hbnqzvzd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163dhrlpsae.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163sbavvwxg.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zznwghqf.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163emylffxt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163oahakqtx.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xchxudsh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163muzspbpr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163gtmfxxkv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163zivmtusp.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163aqpkzpml.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163twpjtkhr.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mtdevazq.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163nwlycvfs.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ctdfsxsr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pvktpudg.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163odwpbbhe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163soaczfao.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163onwqbplw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wkotoksm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vwnfesjo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163veqaguvs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dysrmlwd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163edewhood.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163lnppigwh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163zjzkxtna.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163cssouzkx.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fhgktzds.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163mrmgojrl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ielpauzy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vglltygi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qcdvqjto.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163rnuahuib.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fiwigoen.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xrrklkcb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163smnztsri.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163tmrylgyk.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163sttmlqvf.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163eolayalm.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vhrtaqiz.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rpjsgiuv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wnxbcehb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163csfxnona.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163cowsgjbo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163sulmrtjn.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163drqwnnfl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163cmwzkinw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xhcjwqhs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jamwfbke.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vejjpkfp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163hibcpatk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163udmikdtg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163fwvdfpss.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ysrhpirh.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tjpbzapc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163iybfrato.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163kfjjsuqp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ollimcbl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vixarkpd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163blxfmhop.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163qudhijds.html


<!-- 参考信息 -->