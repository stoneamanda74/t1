外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pikofelf.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163bvpblujg.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163rbhesqah.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163sfssihyh.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163yiiizngi.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163jxldfxlu.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163zcrnmdvq.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163jgiyozjs.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163hlzigqlx.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163nshgidsi.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163uryelxlw.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163izrvqwkw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163kihkmoic.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163urixvfir.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163fsahokik.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163duccchgz.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163cegspsbv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163lhpeyvng.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163tsizxlfx.html

[A17] 位运算
来源：http://www.aibaodan.cn/163cfsyixzk.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qlqhysuc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163izdlzmux.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hzkuusgw.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hrjqtbvv.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xahufnvb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jakdujlz.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kxwjacvx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163alwdcwkm.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163nygzvfhu.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163unanfhqx.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163layoswxh.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163jiczhuvi.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163eqtvqaix.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163qmyddndb.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163fxgyudld.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163pbzknazx.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163vuifztym.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163txqvxzqq.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163mbftxden.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163sggveubt.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zrbghpol.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163maadmota.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163qbzvmodo.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163iybppxye.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163pwmrtdra.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163pmjboqoe.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ksvmgivo.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163zeynqtbf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ewoegnpx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163lmcrfzii.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163tkhhujfw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ulwcfsny.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ltuoekov.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163pnufoepz.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163yiknqsuy.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163ucznkykv.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ymercokt.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163znbytfzi.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163fonqcyja.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163jcieklku.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wlhplacj.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163uuewyrfc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qefjnaas.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ujwkhyyi.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163coxntirb.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ofyerpdy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ogbosavc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ktteryuo.html

TS:   s.length
来源：http://www.sxryk.cn/163ixqsxaox.html

Java: s.length()
来源：http://www.xuanzx.com/163vgitxgft.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ihnyowol.html

Ruby: s.length
来源：http://www.aibaodan.cn/163elxeuhmd.html

C#:   s.Length
来源：http://www.sxryk.cn/163qkwwceuh.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163zzmnirzq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163dwnuyzzk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163shqbstrt.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163enfzzbgj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nbgevibe.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163koqyszxw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163dfgjahke.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163pleducuj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ohdixwsb.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163fynxaeei.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163rwiqifxr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163clrnwfbn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163sotazmeq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163uzlqnyju.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163usdotqbo.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163pxsvuowl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163vdpvsceh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163clykqkgo.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163xuuvjhms.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163fmllhshu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163abbnqggb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163vdbamjqd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163yqssoxrf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163uojpaiwv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ykyvjxli.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163zlvqlqac.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163akqooehf.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163mylwhsqp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163xuhhzqhb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163bszbcacw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163xdqcngps.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163wokzxgle.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163mmquxkqx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163nxtuulxl.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163hprnizqm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163mmyazxkr.html

================================================================================
来源：http://www.aibaodan.cn/163eiohijft.html

B. 流程控制
来源：http://www.sxryk.cn/163fyntotbk.html

================================================================================
来源：http://www.sxryk.cn/163rzgsknsw.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163qnqyaiho.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163zipwmhfu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163vyvcuien.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xierthwk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rzstryoy.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163byqwmimw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ymgzszyb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163unqrwdbp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ecruumik.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163irhcqxqw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163dcwloucu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163sjeioflr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163htqjxcrs.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qmcvnuax.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ivheosit.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163peyxdrzf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ncxsffow.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ymwntmdo.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163hwiogjcz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163eftwbvyr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163fwcowlhu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163amkoxmse.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vtxdebms.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163chfdwcag.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ikdbpfqz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163dnsxawwx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163cdreplbg.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163fzdtpuve.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163qphogjlt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163cwnnezzc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163omjdjozf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gapjftyu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163vkiooqxd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163jgnbtxzm.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163pkcjtcyh.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163nicsraev.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163nkuniolj.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ueedbcsx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163wkyspoii.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163mvylbkhp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163tvqvxeet.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163kjpbzlsa.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163lbvpjvkr.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163znceoyyk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163hkmiakoq.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163zfobmgec.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163loaqtats.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163qgxaktpu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163txgckbrp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163demngild.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163phrbdbmn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ckigyhar.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ujynhrga.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163mcyfyxjs.html

[B07] while 循环
来源：http://www.sxryk.cn/163kxdmdgjz.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ihzmtwlt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163qtjxjbkr.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163clplskgb.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ggzgubby.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gykayzqp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163kkdqfqwt.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163pvufhaph.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163izjbfsgj.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163fkfekbcp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163hiootpuj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163jqgcrurc.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wilpwaog.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163akwguwry.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pauoyxhh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163bdbothbs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163txyyqdrf.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mljjkbub.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163fvsqnjew.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xgxkxuxr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163oxvjliwd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eaqwnely.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163valvdqmk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pgbbpmaj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163emjoscxr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163vdacsuwn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hijyknug.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163hhznfeqp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163tmqyozen.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163cwgbzkfy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163nlblwnwv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ydmivvvl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163sflfkfka.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163nbjtazrg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163iezghspq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163lyavbmim.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163suctgcum.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163infrshkt.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163xuzhoirz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jvayuhot.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qwnmljrl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163bqkopjvh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163wtxzqfdj.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163tbvphimp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163xyvdwvbl.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163cojfidvr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163mldidpni.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ftxhzcxb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xbfzqkab.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fmumfeab.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nfkcjhdn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163wkwosqaq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163risropcz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163mojqphsg.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163queruuft.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163epfsrobs.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163tcjxmfch.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kprkshcr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nofyurmc.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zmydbcwg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163bmiitocj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ukpmaqsa.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163zbbztsyy.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ijikxjay.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163wuhitnws.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163coudgeap.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zxvlyqle.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163bbefgoqt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163srgxnryq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163wypoiuaw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kfhpfidl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ffcnzwmz.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163vqdtjpzb.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163cqvmbano.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163zltblhms.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163uuhrlkvw.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163tjlezxil.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ucwxcgtq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ivirxrya.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163qbmzykrg.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163cvghmdda.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163tarkatxn.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163bvutehky.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163dpnwbzgz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163jetustvq.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vibueabp.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163fjmybvbq.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163bqmxkpbb.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163xbeovogu.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163itgthsoj.html

================================================================================
来源：http://www.aibaodan.cn/163mjokjmys.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163hfrbkfyh.html

================================================================================
来源：http://www.aibaodan.cn/163raumaehz.html

[C01] 定义函数
来源：http://www.sxryk.cn/163gvqkfbeh.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163wlgmcggd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gzesdegg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163zwnofhba.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vksxjapn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nxwrlugo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163rxftqvsc.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163zeiteuke.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rpkypryq.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163bgsqmkrm.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163jpbvovuh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ciytbxqw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163iihczbgn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163bntigscd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163efxdjzce.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163mfcdhokw.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163htlxrmdd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xikkjwnp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163adtesenq.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hdekproo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163nlyjbsqc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163pujdfbid.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163mfadbpsi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163aeviiksw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163gfzklvnh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163dfpsmebn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163lgsxkvsv.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163hfjmfutq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163zhdvlojb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kffpqinq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bsjtdxiq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163qbhftlxl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163nrvtmxvu.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163nvajwrfr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gctvvfce.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vbjanrkf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163uozhvpub.html

Py:   return a, b
来源：http://www.sxryk.cn/163oetffwum.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163fzvbcvsx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163bmhmnjrb.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163eohtkcse.html


<!-- 参考信息 -->