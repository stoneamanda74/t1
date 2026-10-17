外链999!wailian999！

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163xrfxfkgj.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ihnpfkva.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163ejnemtyl.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lqbuyjxf.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dpemmcnt.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dvpvtqny.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pwrgleel.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163tppsulcv.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tnexxitw.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tbtgbynv.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163jrpfitun.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163nljwilpx.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163oxccfryg.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163imtuhsgr.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163aiiledqs.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163cvldjwfj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163tcgcfrhn.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163rspudtii.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163gsdyborp.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163qjgjmczx.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rogmzfuu.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163zphhsszq.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163drrykgph.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ietminzt.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163qfnnjzrt.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jgjdimnc.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163hnqcbtld.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yehtfltf.html

[A14] 注释写法
来源：http://www.sxryk.cn/163lbjiyakq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163jfxchpid.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ietnfmbs.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163facacqcn.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163sxezevpq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163spqftdvg.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163clnygjxy.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163qhsssdjr.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163cbvyleyv.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163llegcind.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163wsirhcbj.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163hqanppwb.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ramngbyk.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163mlmycebr.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163iehhcydk.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163zwqbpxwe.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163wclnqkas.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163tqvgagdb.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163iwwntarv.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163lqxrgcex.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163gluleqbb.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163vbaagxul.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163cknwktja.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163ugcdtgld.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163zgsvyfyo.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163zjsxuvwl.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163tkzrfmdm.html

[A17] 位运算
来源：http://www.sxryk.cn/163lhuigttd.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dukmjcxi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163ruondtor.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ijiaitzl.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ykehkhkx.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hacdqaeb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163egdquido.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wsggbolr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dkujnlhf.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163yoqresjd.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163yudnfsxk.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163fpnfsyex.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163msyxleuw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ifvxqhvy.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163pyrjcirl.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163eqflheqi.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163hbodheqc.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163uakrfroy.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163luxshkew.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163pzphzfef.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163pfgycvpf.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163xtvltqwg.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163hctaludo.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163pbzgmnig.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163audscvgp.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163gsepxiqu.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163vfvqoish.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ctkbjqgc.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ltozeaif.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163hwrktgvc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163afivbsey.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163bophzucn.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163dxfxxwxh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163vlsvdwpj.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163sjnnoqkc.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163yvlktgdc.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163azzdegmf.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163qyiebksc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dxaraizy.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163gkxhstih.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163wfenfiws.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nwrxqfxn.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kslwrpfp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xevilxot.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163wfxduism.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163lkwybajv.html

Py:   len(s)
来源：http://www.sxryk.cn/163elihqtzx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163hfxahqoz.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ckhogwtg.html

TS:   s.length
来源：http://www.xuanzx.com/163hqlfpghh.html

Java: s.length()
来源：http://www.sxryk.cn/163xislxbmg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163kvvmflvc.html

Ruby: s.length
来源：http://www.aibaodan.cn/163ogtpfmdl.html

C#:   s.Length
来源：http://www.xuanzx.com/163uzbroqxm.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163xlhvxqai.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163drqxfmaz.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163ycetahvn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163otytzqnu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163adlpsbpa.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dblanypz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163gdxbwwsg.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163gnhzamsp.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163drpwooln.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163mrsttmql.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163kzsbvpau.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163wzxszava.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ybwizaok.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163gcqehopk.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163pyixxllw.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ismcgffc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163yprglvab.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163gpohqven.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163zfjxkkgp.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163sumvjtas.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163otzmzayr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163doujdpsu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163klfgomoi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163xecphdcl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163nwnlgmul.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163ixgqjntu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163lihapisv.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163aqtvfjaj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163ocelzoiy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163nsrwkfxh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163gircsqks.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163pxucgpey.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163xwpiyihj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163akqzskvy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163olqaqfgo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163fgxgoatj.html

================================================================================
来源：http://www.aibaodan.cn/163pjstbncl.html

B. 流程控制
来源：http://www.xuanzx.com/163hwuhusgv.html

================================================================================
来源：http://www.aibaodan.cn/163kyhbzhmt.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163phwnyumx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163edftzkrl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163swpxymlw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ebcivtwt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nymhqhip.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163uusyfndx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163antavcpq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163zughzrtk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fqmybvnb.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163rdubwzdd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163evqeqvzw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163obfgvjum.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ayhmqwah.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vzqggkgd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mztwuuck.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163udzeents.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rfvtupab.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rwldoyon.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163qsfhsjui.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163twqummpi.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163vgetlphu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xbkpwjfy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fypdulyg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163zhcsuwsw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163cpygqmqt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163vshdydty.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163bibvssjx.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ljppwyll.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163sejulxtb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163fldahjih.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163yndsqcfg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163pgguaxzx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163zedvvcyt.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163qsznfbbs.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163hkfjbtyq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163xmdgwaqh.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163fiylgvaf.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163rmfovzbc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163aposlmdg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163luyczulk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163edjjreaz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163bwsolotq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163cfhrcgrp.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163qmzmqsoy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163xzbkyahb.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163wemkireb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ddusmjsf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163yoyxacth.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rccwefbu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163movhyquq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ywhkfquc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163zafgphao.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163fbfrvowq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163mcxesdmz.html

[B07] while 循环
来源：http://www.aibaodan.cn/163nwemfrly.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ntmqdeek.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163stlzcqdj.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wyutggux.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163psujqhbg.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wvtcuskq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163jstxepap.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163smicercq.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163btogjqih.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163eybelnrm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163qcceqjrt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163atbllfqw.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vjnfrypb.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cxxeavrh.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lpnqmpbc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163oefasisl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163hqodrrmf.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zjdiknpm.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163pnefwmxc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163chbpzchs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163herjogge.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hnrixgry.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163syvvhujo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xmepfqlv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163eejbwesw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ujdwqpml.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jugjjosk.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163zrylfdhh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163lvwsbtfq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163rnnyhphw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163jkxjqqxj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163zuljntzz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163qocefmti.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163beanuwsp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163foconhai.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163jcqqvccs.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163zkdjpule.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163xwenaufq.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163piqadntn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ubjycmle.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163yockyzxh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163uparisrf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163mbgdzzuy.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wvbsrbro.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163bjxnihaq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163llqukqwy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163gzedgrpi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163oqyzryhz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jzmhqchh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163adisalrh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ugltbpki.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163mkpueqzi.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163lhcdcufa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163wwhcbmoz.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wafcdiqu.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163zqsgkkww.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163xuduuhbg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163taypkmmk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163aaemiglw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nwfbibcb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jtdnqzcp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163okopzwlg.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163dcrexbqf.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163qnzmmrcp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163yfpptuhs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ueboafof.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tmbhncat.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163pdhqviqu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163fbyoupwp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163xaimdnhm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163pmhkwgql.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163tgkqqvsg.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163pqycklbo.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163dohflutd.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163nnmkkojf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jkezdifm.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163arsbidzi.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vnwrzrtr.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163rwyhgehg.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ccssibij.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163negghyxp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ifgjlqnk.html

Py:   if not data: return
来源：http://www.sxryk.cn/163nqzycwru.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163tlbczshc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163itkyrbnl.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wrzzhvex.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163bazvfrgs.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163tdmoilzj.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163kagzdyhr.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163pqjkhtwa.html

================================================================================
来源：http://www.xuanzx.com/163qogkfcaj.html

C. 函数与作用域
来源：http://www.sxryk.cn/163eeyykpav.html

================================================================================
来源：http://www.sxryk.cn/163hpxfhynh.html

[C01] 定义函数
来源：http://www.xuanzx.com/163hgnmpdnf.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gwjhfnce.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163girgfhcu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rgrmtfmp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zvfwnwpw.html


<!-- 参考信息 -->