外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163eoitzwow.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163dovpokws.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163yijzgbjx.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jgdfqhkj.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163dcpysyzb.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rgqyxewu.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163gdaaibkq.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hwozijzo.html

[A14] 注释写法
来源：http://www.xuanzx.com/163kjoczyyc.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163flnldist.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163jzhhgzrp.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163cbnmhegg.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163sjmnmzul.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163laqudnmg.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fgikeqpu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163cbrebavr.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163dzrgksyf.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163lcnfbukg.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163hgavajtd.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163aantnylo.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fjkplomd.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vlhwjlhm.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163llsdmugz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ylsobqeb.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163wcqbddjw.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163mxkiivvr.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163otvoohum.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163senhtkbg.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163tfnmgnfc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163zwirvhfx.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163xzrtiits.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163rttyokua.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163dgxqavao.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163vffwsgkp.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163xtnbhcgt.html

[A17] 位运算
来源：http://www.xuanzx.com/163utgvzkvh.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163glkklkbo.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163skoxhcrs.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ukdvxdtx.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163mrqecelp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zajwffoi.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163iolzvwzf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bytvqeug.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bwcyrjph.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163bdostnmt.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163vjabkdmc.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163ymfovvjh.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163qjwctava.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163jysoieij.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163cmgvfkwu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163dlnusnzj.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ugyohwgm.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163zeprmlgw.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163rierkcrj.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163rlpoiedu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163zldnuief.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163bodwclcp.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163yeeazptl.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163lhqrfhou.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ibcyfoaq.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163lovzkrei.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163razuonyf.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163jtfydlaw.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163uornybqw.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ufeaafxr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163gawmfpcs.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163ofruqmtp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163smtnuhvu.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163okysuwuz.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163nneehgya.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163bglfvxgo.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163fxjctxis.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163bujlakgg.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gzhohbuj.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163mqzmuzat.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ribptlsd.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zsyypxfw.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kzmbqrya.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xloplvjb.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163khejrukq.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163dpmlheqr.html

Py:   len(s)
来源：http://www.xuanzx.com/163azrwgvvn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163bbwfrezi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163hybqdujv.html

TS:   s.length
来源：http://www.xuanzx.com/163kjumjcww.html

Java: s.length()
来源：http://www.sxryk.cn/163jcrrdbrd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163fhmscilq.html

Ruby: s.length
来源：http://www.aibaodan.cn/163wzpgmkmk.html

C#:   s.Length
来源：http://www.aibaodan.cn/163fribzzgd.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163mtqyeetb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163jzazlyoh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163iprjzfcs.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pnisyccb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bjvedjnh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kxwdkunt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163yukrjdpj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163teddyotc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163yqbnlxxz.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163rhwmpars.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163cjuajytc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163grwlnovt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163uumkjoor.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163kptclfds.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163sexjzmak.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163sebdcjgt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163kwgmapny.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ulxxjmex.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163fuhxropi.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163wzykwuax.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163lxjivtrv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163azjzsabl.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163lchqlwru.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163asmsiweu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163vgyyiuge.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163flgwipcp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163iivjbaix.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163zaezskii.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163kpxkkzvk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ofqgpfqj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163rwgvwqqq.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163zrudydui.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163hffyyaqa.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163qjrevlup.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163fswnodzz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163wpmrsysy.html

================================================================================
来源：http://www.aibaodan.cn/163zxacggep.html

B. 流程控制
来源：http://www.aibaodan.cn/163vuxmlwfs.html

================================================================================
来源：http://www.aibaodan.cn/163rdfhgvro.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ceahvmwu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163xkdtbmqm.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163qirwmbxt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dpovmtdw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163votiixob.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163islrvkjb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163wqizuzrk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163uwthmbzh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uzdwdcmb.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ucxydnff.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163sylbrogw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163cpznircf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mugrmmjd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tjwuwung.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bxboqvwp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163jewnaonp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163acvlbwoj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cvuqiijd.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163tmlxpuec.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163qpobjdci.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163xpmwvisz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163isvbkfzj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gqloigoo.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163pluhrszy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ipbsxhhp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163pqpdenmg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163akhxfegp.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163yelvujqx.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163mvahgten.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163azsrvezw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163aubrcmta.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163oockhaei.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163hermcfcz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163wpmeiaaq.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ciehizxl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163omftgvzr.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163rflrpdzp.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163mxopogyp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163tkqaefuu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163scyzovmq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163plkpbbco.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163wzhizupy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163vnavivcv.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ktzbtjwf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163qpxglnkt.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zdyhocek.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163pisqikxs.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163rvydtypi.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kfqlgbxn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nbadmzug.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163qyimgcej.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163gctpmgpm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163jdghwwvl.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163bbxeikdf.html

[B07] while 循环
来源：http://www.xuanzx.com/163ibfcnjgm.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163hdcwjluc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163sibbzshv.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163eqrsootd.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kgbesenu.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ybpnahfl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163vhladzdz.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163vgyuvipt.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fhdibyxa.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163mqswepwt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163sqlgikif.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ndgwusvv.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kyttgyjw.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163shxjwxyv.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xqgyzjfe.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163cquoawid.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163egqfiqza.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jpmytigb.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163nznimydv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nijnfsao.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163dyckdrpk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cuegeido.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163clkuocrq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gwlrjbpk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rlwmxrsg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ckdhjgym.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163raqrmkmk.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163uhylqalz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163iggdubvv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163pbbzqmmo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163bfjqfevq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163exulvhkf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163vsbshpnb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163hnbstjro.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163cyjotdre.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163kwzcsiny.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163nsjytwdg.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163wuyrmrby.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163vbvtleov.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163iivtqsoe.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163aunvnuyz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163xxhelhqi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163nyjhlbvx.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163svnbyjro.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163grccrsyt.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163hrimwyzl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163gqgacerw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163cwogitat.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163iuwycxyl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vgzswmqn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ykqroqbu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163wybibpfn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163vdcnohsz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163rqaqdxhd.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163vfcquzrh.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163nlwyodvd.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ltkiuesg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kcxepqij.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163iqsbxrah.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163qymkxffl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163jmpmnzus.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163kuyahjod.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163tutniknu.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rvcgnbzl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163bgixfhhq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163vyclsqpf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pdaushzn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163glwdnysn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163mlvggstz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163bnrfovts.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163xykzzcgo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zylihopa.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163zphyeoav.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163lutljukj.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163qwcvawgr.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163iadqhruf.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163vtcmddwh.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ptmsveot.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163lnpnbmgb.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163hqbupcqt.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gtbiajjr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163okpeybae.html

Py:   if not data: return
来源：http://www.sxryk.cn/163mcvehoxy.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163iljpjogc.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163nvkeedfm.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163nkujxdro.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gydvsrvd.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163jokybiab.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163fkmicpnq.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163kfsjvwth.html

================================================================================
来源：http://www.aibaodan.cn/163jhkoscxp.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ybcjshoq.html

================================================================================
来源：http://www.sxryk.cn/163ydspywag.html

[C01] 定义函数
来源：http://www.xuanzx.com/163nuhvknyp.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163lzmcaezq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ktzwpkan.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xvlsatop.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ucpcjiwx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bhcimcyf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163zvdvemui.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163dbgrugyp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163axfgtwsw.html

[C02] 默认参数
来源：http://www.sxryk.cn/163mslmqayw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163hlhvcntb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xbugjgik.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163yjoaqopr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163sppenrai.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163mhwhjwzn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163yxdnpzcl.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163cdgszkgi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163oaebyfex.html

[C03] 可变参数
来源：http://www.xuanzx.com/163epvvjdht.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nippcjys.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163tblrkczq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rfzxypet.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163pmrgfklx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163xufzjbjx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163pvjjjpfm.html


<!-- 参考信息 -->