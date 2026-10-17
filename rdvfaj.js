外链999!wailian999！

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mkbybsvp.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163joueyytx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163apmcpxzk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163eclghvkt.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yldkwvva.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sxuumian.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163njfuvdtq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163pkzhaeof.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wvyvbfqf.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163vcldxwyn.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ewnwhlrt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163nymfybpj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qgkxpaws.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163exmwwfak.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163rpwowcms.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163srjxubpb.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163vnsdvcku.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163wycwgfsh.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163nxssqclk.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163yonwlvbz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qjdwamex.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163usxvembd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xhiopeur.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163inofeuku.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zajwxdnr.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163hijgnpah.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163xiwpjmtg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lhemhagh.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163cyytewkp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163okxkwgtq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nggqavqc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pnqvugxv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ffjmmuoc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163srqezgcy.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ezhpveuj.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163hiziwkvb.html

[H07] 断言
来源：http://www.aibaodan.cn/163vlfohkqa.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163snkldqtv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163fvemdngw.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163btubrnps.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vhugxlcm.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ibhbfsmz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163cntvrrop.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163semqbutm.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163nbesgdeb.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163baflqfqd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xbfvrfqb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163oeohgyxy.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163eavgzcqf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zfgrffiz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ziltqvmf.html

Go:   err.Error()
来源：http://www.xuanzx.com/163sdtkmzst.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163vgvlkqfz.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163nuowztpu.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163slyxlfcx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163dgarogbl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163eybeaomq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163eejzoxij.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163vcgkjphz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ptgbydvj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zbjazaqe.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163xyawxfzd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163hwqsnnpv.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163quemgnpl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163hypgglwh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ryjdonms.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ntibalue.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163egqkimub.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163tjjjkcfa.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163cmhsfrza.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jfdfmisa.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ginxnhji.html

================================================================================
来源：http://www.xuanzx.com/163zcjpvxgw.html

I. 正则表达式
来源：http://www.sxryk.cn/163bbhcyjdk.html

================================================================================
来源：http://www.sxryk.cn/163idapblgz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ybgvnckq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163zhqgrikw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163eqnjgjdt.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163llzkwnng.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tispunbh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163iuynqunt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163uxbgkhqt.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ycqouchw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163nbktztcb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163cikkmxij.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xykxcyaq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163exnndfau.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163cpinfftu.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xszifeyu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dvvpkfjv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163eqjrdlui.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163spghlijv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163pchojzvq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163cwczkybd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163smbvtukf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163scvqnade.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163llsdiuwm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gammgrhl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ygfxhnmd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cdzrhjpf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163kabwpsvf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ebqvdhhc.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ejfoumme.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163nypsrcfk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163dpewsypr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lwhnjbxu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163grcarhrz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163mhuwvujv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163mfxepyab.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wtatklxh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163xntmnazi.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163sthbgcyy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163haaxxpjp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163axhezjoi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kyrkzgfj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163svgpzdxc.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ylgptewc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163siunkhuh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kzcqrcsj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163igkuoljw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163egsejrni.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hpvgdgff.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163dkujiopu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gpgmoxey.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fcagudin.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ntojehmq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163nwcirput.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xmutdqnw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bfcseuul.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163lkqoypxs.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163kocxfrtg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163zsbldavh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163pgyiflar.html

TS:   /error/gim
来源：http://www.xuanzx.com/163chyrdlff.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163elirpjij.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163yakmztuf.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ttngcuey.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163qteegkfo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163phslpewa.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163isuoirwz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163lnhqzftv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163izuzkbin.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163trojbwmg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163nnscbcev.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163wadifhyy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163bucgprca.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163aniagfzk.html

================================================================================
来源：http://www.xuanzx.com/163gbpvaenm.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ruembgpo.html

================================================================================
来源：http://www.sxryk.cn/163zqukszym.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163jifunhdl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dgsvzjxu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ydrbwlkh.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wrnsytsi.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qbhutgol.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163opkgxcls.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ecukuvix.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163zbvntwsq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163cchjieqa.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163axmwegwe.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163phzfaecu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163celzzzdm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163zbcogrfk.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163nnncsuft.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wiooukil.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163rowflrqb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lcbunrsw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163qxgmwlco.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163hxqwnqqn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163yojqirul.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163gozldjne.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vfanvdvh.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ftxzaaib.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163lpcxlnax.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163pbuyksez.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163iqirbavc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163kygqcrez.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163vmbafuqu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163jcpmbudf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163rcfsaczi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163dkvgchtq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vkjxrkel.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163cquyroex.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163iedzcmvz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fbdcmnff.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163dsdsysqi.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163mawsxxmd.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163cjredfqp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163knctmjre.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gmhzuzvg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gnmsqpug.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163cdvsqxew.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163upgizljk.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ascrawch.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163iohzbfrl.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163zhmpzuaj.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ehzdlnvi.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163fxcldeqw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163dwzzgvvd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163mtfeluwy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163yadaagzv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163vqdqyrim.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163lkwtmjyn.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ninumqrl.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mosmokqu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sjnaegox.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mkwuyzbq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ltzmdqiy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163popskxup.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163vsxkyxxg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163jugvibwl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lvktpnhv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kdsxkgfs.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mcqhbxim.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jcfjjecq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ukeqtgvg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163rstqhxxu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ybedumfe.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163cbmanmfz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163deohgjlt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163blskayvb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163sntfyown.html

[J09] 时区处理
来源：http://www.xuanzx.com/163vwixjqmd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163fjoirksh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163nabvlgzx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rlwzerbj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163suqanapr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163igshvgio.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163agexdepi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163gdvskryx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163lymbismv.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163mfrgpvfd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163jwleurac.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mnotzxhz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163mxvoreyt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163soodpfhx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163hbvyjvqf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ualhghfo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jnaihuzw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163dundjgud.html

================================================================================
来源：http://www.aibaodan.cn/163xfqsddtj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mlrwgebm.html

================================================================================
来源：http://www.sxryk.cn/163zilkejrk.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163zuysltbu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vulvkain.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zqummwnq.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163uahihffb.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vilphlvg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163enpafofr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163educgyeh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rekvnrzx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163jqmbzduu.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fliqbdsy.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ozsuczhn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ttsmbdyp.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wfvcnjui.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ntdfuiin.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163zvrydofn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lwqwakdv.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ipfiyqgf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163gwtqnrki.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163dmlbmjoo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lzqepfwh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zsdmktsu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zflyxkxm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163otlvrhjh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163uzhhauag.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fjerdhwh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163mlfynqeb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163csausgcs.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ntgwazjx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rnjnltwl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163anijhloi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pgaaedfs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163isflddns.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163lqhveygk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fskvarxo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163bjpqlatq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163pjmuvdey.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163yycgswlj.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163uvqoqfuu.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vuiqfnve.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nmatfgzd.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163oemlvxle.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ljwbxyvg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163azwtubrn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163xkqozckx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tbjzyghb.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163lkrlquda.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163thjrthqw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163visblcrn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163awkknele.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dozenwku.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163uohfxeqp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163yrjpyvma.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163fjgyoqcn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ivydppyr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tyunqeau.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163idqzktgd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163unrpyldy.html


<!-- 参考信息 -->