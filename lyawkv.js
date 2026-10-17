外链999!wailian999！

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xwiooafq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163utnmyjii.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163olwfdugf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163lgchehiu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163phjgsetm.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163crctqadk.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163nvlvoakg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163nejrkypz.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vaphtngg.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jnfhkqyr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163bqyzbozv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163lyzezoas.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163krkvwfkh.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163zchzxbka.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ybcblmzx.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163lmdxuwdg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163vphlfnzy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rrokbomt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163sjpfwsli.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163gmfzetjh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163volcibrh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163jaxibjun.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163rigvljpl.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163pibjhctu.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163tvqedcwa.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163vwbawopz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163btfvnzky.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wmbrdmkb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163cgbektky.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163wrakrrnk.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vwijtlah.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163habzokwb.html

[H07] 断言
来源：http://www.xuanzx.com/163vucbgzkj.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163tupihshd.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163jzuobban.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rlpyxyce.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qrnqbwfd.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163mhvrhnbs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qqvlqxsb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163wakrcpyz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163swnfxwvt.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163nstprtfr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163zbcttqhh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163oyxczevb.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163homywhiv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163vpvprcoy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qmbrxgyy.html

Go:   err.Error()
来源：http://www.sxryk.cn/163jehxzmdc.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qqlqhzer.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ovuhbffs.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163hfvurmyc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163uryhlpdx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163gemthtqd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ebidegax.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163kvhlyjhf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163nlhqweye.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163geqtjeck.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163kigepraz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163jqfhcqqz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163upjxeleh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163dtllzfcg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163umignauo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wjxeryuu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163aqxuiejn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163nfteialf.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163qnwxnvfv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163txexwtrm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163irttzuho.html

================================================================================
来源：http://www.aibaodan.cn/163cjqnrmzt.html

I. 正则表达式
来源：http://www.sxryk.cn/163wxqqetqp.html

================================================================================
来源：http://www.xuanzx.com/163fgkemlrk.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163siywbwxs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163eugnbqhn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163knpmimog.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vwjprdhj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kdcoppac.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163oufgcjdt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163pedromif.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hbgujmuz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163odezkaak.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163mvgvygvf.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163lzzzjtsl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163bxzbksha.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xonrzygt.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ioigheko.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ddbrinnd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ehwjnuok.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163hneflppx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163rlsnbsdt.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163fuwijcvm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163eexcqcfy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163lxzzvgip.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163gzedssig.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163uzrgotmu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163tqjtdxpn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163pvlbnred.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ajkzindt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vcxvyvps.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163njsecjeg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163kvtpjpak.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163maezmmul.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xelfradq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163odexwmxe.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163owawgegq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jnmpweuj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163cimmxtne.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163khgeajxg.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ezwtkpew.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163whqtpvtp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163tzraobfr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163icoxwkoe.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163znmkqokf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163hrbedbdg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163uerubcuh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tyjsnifm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ujmcksxq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mmqdruwx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vszkdysf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ryopkghn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ivbrppjg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163cmzflrof.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zcgdrjxt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163julkphpn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ehbzubud.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hxmyosjd.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163imxupoym.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163zqeznrze.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163tktfnzbj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163isnaoxyi.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163qkudqjvq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163hgfbftfh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163kiqhwtzu.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163dxwsklwa.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163qysloqva.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163zudmhzah.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163jzjyamdq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kxhhxlzf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wolywnap.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mffubnfs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163lbzypkop.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163vsgvkpcq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mguonvbs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xppvylxy.html

================================================================================
来源：http://www.aibaodan.cn/163xmmwyfzr.html

J. 日期与时间
来源：http://www.aibaodan.cn/163lhhqxjrn.html

================================================================================
来源：http://www.xuanzx.com/163euvtbhch.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163wpofammt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163mrigpekr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zltignew.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wiwqymxd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lfozllsq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163uqicwguh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ntqyifol.html

Ruby: Time.now
来源：http://www.xuanzx.com/163xsxgzdax.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163krombnls.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163xkhashev.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163buupxtzx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ohoscztg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163rdsfunjm.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163typjqisg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163mtfnqmam.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163qtydpqje.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ffavnzfk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163jkphbggz.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163sufndedh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163wacoqfkg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163gbmxwonr.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jempnpmn.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163aepvaqgt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kevurflo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163xqvjarqp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163oycfqtqx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163wugfbmgd.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gngziqxr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ankyjezi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163bwraylgx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163wbdonltt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163rfkthtgz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163vntogpnq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163bwoycqmf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ckxofqww.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163iesjrbxz.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163kkjjbkru.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ehpqbttq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163vvjrcvkk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163onchovdp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163heughrke.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hguuryil.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163hteorzpt.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ywygngmr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163iumwfixu.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163fgnqxvjk.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163bsnmjslf.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163plxggbsf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163xjumpgll.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163aubzlvrd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ujqvfrum.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163pfrpszot.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163yfvzlcbk.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163pzbylcms.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lnkkoowd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yaeiiasb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ustkfedo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ixelnrek.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163urxqhlle.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163bxqcyklo.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ztzheslr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jacopfmo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163txkahhex.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163odidueew.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163edhcejtx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163uvtmslvk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163slaqzvhh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163kjmvwpbd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qyprblqj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163blmxanyw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ifzasmbw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163revpkfkg.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fxrgpfkw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163qgfaxkzq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163jbgwfigy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kjwiyueh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vfgdkjyb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163jcdngmfv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163talpkwei.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163xxltvzyj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163vwzgnaql.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163emystptb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163huqxvlge.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163nrzzxdsj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163kglkuetb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163gnwbogsd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vzfjekpi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zikywfoe.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ynduazfd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163enntrxin.html

================================================================================
来源：http://www.sxryk.cn/163hrvmlorc.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163tcjzublo.html

================================================================================
来源：http://www.aibaodan.cn/163obfdsvnd.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163cnuhmlkv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163kbtgswon.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ygtalipw.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bezeohjd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hfhsbmfj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ixdrqioj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163kwjjjsss.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163sofmgkbu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ijvygjxb.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vmxlsibj.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163jewisehs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163vftqmxbt.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163twprmdms.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163iuuzadqm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163wqmqbdep.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ymgflbpb.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163grjsedai.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163sudijvwi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163bvfbawqd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163dpdrklje.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163diqamfyv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dkqvvlfc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mexoontn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163eokpwxmo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163blyhbztq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163apprfnvl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163pdgiddid.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163pvbsosfx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163bmyhljgh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163obxrrklo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163iszffyyo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lkkeahjv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163pzhjcppj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tiyddhwf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hrnkhili.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163pqqaukxj.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163iwicqlcz.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163njijurxn.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mokdfjkm.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bovopzvi.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xrumgkwm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163moxbxuyq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fxslzgka.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ppjnrlkf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ahihdxeu.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163mrsjsydu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163kpuxmcjr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163nqwzgrdh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zpqqyvaq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163whtikvmd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vebibxyt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163nempgfbn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163arltyqef.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ekaemhvb.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wobixqte.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163daspuujw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ezahapeb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fdnabryv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jbldlagx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ccdojyqy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163epdrvtcr.html


<!-- 参考信息 -->