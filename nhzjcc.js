外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xdpifxrj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163yzhcybsz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gfehilfl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163vxbwifgq.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163yetqvhof.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163vywejvbp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163toidgvco.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dimquqfc.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yrzuyqhq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163oioyfstm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163qlliuqkt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163dtyyqmjs.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xibguzsi.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163yyagcnxy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ypmrmpus.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ysvvgfvk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163uatemvss.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163opibcxjj.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ftqvyqix.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163eogheozz.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163vboobuqe.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163wgejnmaj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163szrrjcud.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163dslmlqcd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163sbrdisyf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rfnhybke.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163udhhlzty.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163zcvfjash.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163hojbgaea.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ebtkerqy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163aumwcbyq.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163rcjjeorm.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jbmyforn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163pmlpnsru.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cdbpcqyu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163anlsvcjt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ejemyebw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qtlqougc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163wbbnuwzg.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163vglummsr.html

[H07] 断言
来源：http://www.sxryk.cn/163weskhcol.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163njhvjnwp.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163wpnqnwzy.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ayisvjqo.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cnrspxwk.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163tkbjiwsu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qxjnakor.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163mjdxstle.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163wofucypn.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ctlkwxzd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vsxxxlxn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163eqvbeffr.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163jnxftgpg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163oersywmp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wazbyquy.html

Go:   err.Error()
来源：http://www.sxryk.cn/163zdrxjmgm.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163tkfvimwb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163wgqcaomb.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163qzruycgn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ygactntp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163gmdrjdeb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163kzmbmtfx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163fkabxgqs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163gtezvyff.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163cqzelnvk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ufkwlikg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jaqkkmjo.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qeufblhu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163hyxbxwod.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163enbpioqm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163sqfmzhqa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xkmekvhk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163hvvgrdsj.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163pnffddup.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ikxkexxg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163supvfhpy.html

================================================================================
来源：http://www.sxryk.cn/163fyaloewj.html

I. 正则表达式
来源：http://www.sxryk.cn/163lhspfctt.html

================================================================================
来源：http://www.aibaodan.cn/163ooqwzeol.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163dfmprfxh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163gpnevqjt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163nbmqjmrl.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wkrwvqng.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163icanfynx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163bfrquedr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ihojvylt.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163rmnpawnu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163tlicmuwo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163wargvkpf.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163oqutnjbh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163muagybqh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163uslpvktd.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163kccegpag.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163hzwaguzu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163mybmkwzr.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fncuyktd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163urphhfcz.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163wlsoqyhb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ticbnopq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ewdlrxys.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163icxfgeul.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ighnmovd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163fsksqoul.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ycguugxr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163wljgtxiv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163uxcimehw.html

[I04] 正则替换
来源：http://www.xuanzx.com/163wnvongdi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163egfyvwwp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163swmtjapf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163aphetbcf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163aeeuokpa.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163wyxozpfo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163voietihv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163xtsbtpvv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hxsejtzh.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163zjoukfsr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163bjfitiyt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qgpobkbz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163danuwmvc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ojbnrblv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163uimuoimn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163iydkpoel.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fhsdmgng.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163oehnnhcd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163iwbipead.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mkjrtyjh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163kmukxzum.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163pchniguo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163duolejcc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163kbpxlzip.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163yaxiyeoj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163vewugkxc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vgoxznte.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163lzefzfnp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163naicytdo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163egchjkva.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163lqdzbgxn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163wkqstylf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wirrkfrz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ppgzqeod.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163siwwrmtt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163cgeitybw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163syuzgykj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163vyltyxgk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163sxwenaqf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hzkljjos.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qnrptoue.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163rknfzyuq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163xficxmnu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163svmtebiq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163spabozwy.html

================================================================================
来源：http://www.xuanzx.com/163hmqreyct.html

J. 日期与时间
来源：http://www.sxryk.cn/163yqiuvpdj.html

================================================================================
来源：http://www.sxryk.cn/163hohotfbd.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163aoitlpwg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163xdyqfgkm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163elpjahtn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xlxxomaj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gsjixtzy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163bzidxgie.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jnceowiz.html

Ruby: Time.now
来源：http://www.sxryk.cn/163nxdbfbbf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163qmmucttv.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163svmoqqjt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163eadspjwr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lgvoxcna.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163iajhmhgz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163oeszfxcu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163rotgrvok.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163pirsqtvn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vuiipubb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163rfpjgueb.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163oaauxsuz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ihwhqwzc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ytaykgyr.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qfnflgwf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163adesoqjn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jntrgeac.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163hspocihu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jatazlne.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163uqooqsas.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rrgmltke.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163voaucoad.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ictbtqjx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163stlzqark.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163xfoumbmp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163lgxwjsvj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163yryldivd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163tkiybpjt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163usgdreqc.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163iaqskwcl.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163nwnkhqmg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163tytewvlf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dniqrwzi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fhujbkca.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hmxvftst.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163rcvbemsi.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mracxxsn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163mlavxqmk.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163zastluky.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163hlgnhzrv.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163wbrukgpn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163jlwfomzg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ymprzrnx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163iczjxyvk.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hyjzzago.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ggaeajdf.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ncrjvqru.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163zplvvhxj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ezxghiuh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163rtrzjtuu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lctituye.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163trlssvrd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163orckjwcc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163lqsprnvi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jtinoekz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qftukurj.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163jbrpbhzc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ahuzhjee.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163uvqfltid.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163vjgevivm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ishsjiaz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163vfncbqec.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163puzxugxf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163vjrjuckf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163bngscwqq.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wydkmqwq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163thhczxpy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163kgzgqnkq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gwifptmx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gkerdhra.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ipjjrebi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hegouluo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163pymtktpz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wbssakkv.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163fcybubra.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163kftelfmu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163zglggryr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163xugrrpmt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163jivcfeig.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163jcjitpmq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ajcukjux.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163vfjbcqow.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163whtkrbuk.html

================================================================================
来源：http://www.sxryk.cn/163kotbzcab.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kjjsgmbr.html

================================================================================
来源：http://www.aibaodan.cn/163ugsjxdih.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ixlwlxjw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gaesdtcg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163plljytpo.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bxbcnwdy.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jsnuqtte.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163qlxdtygb.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dsgmdtny.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163jevpqkca.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163pgadawuc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vcuutnpr.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163hjhmnqnq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ibjdtpft.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163nnjnduby.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163afbjnytg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163cgnqgbuc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jupvzvmb.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163dcabjbxd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163mshxbszp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163pegjvmpq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ktiaopxg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kfppvvfc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xsopjzii.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kbptudot.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163iniugrys.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163xlkwpjdv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163aieqarmb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163keabxsfk.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163zhaoieej.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163rjxnyxfb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163kmkbmupk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gkpeaowe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tpqidmjv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163qnhgiqiu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163oxnihfvr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163maienpmg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163bixetdup.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vxjywtxu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163nbafyimj.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163sncefvzk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hjvwarcx.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rmqeedix.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163kirakilj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163rndxmxcd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ihhkgmko.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163cahhezsz.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zjrdiffy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163yhwepvpf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163tkfyymwq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163nntlacvp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163sorwtvgt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163udislbkb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163dcffqpps.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163iaocrwib.html


<!-- 参考信息 -->