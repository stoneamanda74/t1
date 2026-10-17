外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163xvrygfpr.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163qafqpcmc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163uowohbys.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163zdizngda.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163dcrtuiyo.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163bjpmlnmp.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163ocpfazjh.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163timmztfe.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tsiuvygu.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pxvduovm.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sjvqrjem.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163sqrlfsxg.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163snslkhge.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lmhishmq.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163qeeulley.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163plhhtemt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163fbiqrens.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163qsbpvwev.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163rfjmovms.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163suzehkrp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163npljjlzi.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163eofvhbaa.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163wmgapcag.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163nzoqxvbi.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hanglhfw.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163jivedaxd.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hiaggsqp.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rpzfpxaw.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163dfpmkyfv.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tndmfldw.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163klwqyest.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163utipibkk.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163cchckosx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163piqowhvp.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163izyplnsc.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jqadmgam.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bmqfxjer.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163lzmtiadr.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rekcbyjm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163tbejkzhb.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163oyhzwkdg.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163krdzbfqk.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163rypxynkn.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163srmwgeib.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163erysoanx.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163xjgdjzkt.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163exnmjdgm.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163edcvzxkd.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163fzhyzsxk.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163syslzmkb.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163pxjugjbu.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163zqrywcag.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163hhmslhpf.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163asjcxvei.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163qqleoggb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163dumacnbm.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163sfbfxxiu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163yvjymcqo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163cvkwtrga.html

[A17] 位运算
来源：http://www.sxryk.cn/163zxjllxuf.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ctcpfvub.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163pnflhknp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pivccmop.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163pqleckhv.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jptanzdq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tyhpblip.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ogbgetym.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qcnylzej.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163fqsqmnux.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163pokftskn.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ogayiifp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163vuezknll.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163tycyaqdm.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163impwqsjx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163bqywwdjq.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163jvwokvqi.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163qmhoqaxi.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163kkqiclni.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163wealxtpt.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163zxaigdxa.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163lvbdbkbq.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163yrptlglf.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163xrorosij.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163qbfqngdl.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163fzstxoco.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163knftgdrf.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163cdmldphq.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163gjzzmgpk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163hgdjatir.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163nmamjlyb.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163jvgyrqir.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ejigqtut.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163aqbaqtnw.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163pyksymqa.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163aauvymlr.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ofcdfhnz.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163msphuqli.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nkwcttxh.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163pbvugtzw.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ponqedom.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jkxwwqgt.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ybwheqhq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163enwoaqdd.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ckuisjda.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163nhuqgfnb.html

Py:   len(s)
来源：http://www.xuanzx.com/163njncosns.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163pbbxvsif.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163endfzrgt.html

TS:   s.length
来源：http://www.xuanzx.com/163ovvjwbbn.html

Java: s.length()
来源：http://www.xuanzx.com/163nnkjigwl.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163nqsobxpy.html

Ruby: s.length
来源：http://www.sxryk.cn/163djhnnspy.html

C#:   s.Length
来源：http://www.sxryk.cn/163wstyfcmz.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163olgonmkr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163ebfatfhb.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ioiyqepg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gigewnxd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163issvpmes.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ejthiocj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163kltsnjww.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163mzqjmkjw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163jdejsnqg.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163bywvnkah.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163argjfslz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163blhsmcww.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163uzgfoktf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163atetfvay.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163skkyselc.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ojlqvchq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163bpvkivhk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163lupylfhy.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163mtheidsh.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163vjgeeyrc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163hxxntjhg.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163tcllwfvi.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163kthgljls.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163vorvdfpe.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ohdjhfzq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163wcltgwdx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163bcnpeypw.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163fmxfzbcr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163bjghizod.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163lpxwdfrb.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ubttldws.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163phnnrjso.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163xzsyqgqq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163hdlqlioi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163gdpfkiar.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163fivyuubx.html

================================================================================
来源：http://www.sxryk.cn/163lshepymp.html

B. 流程控制
来源：http://www.aibaodan.cn/163qcfvhczw.html

================================================================================
来源：http://www.xuanzx.com/163rrjnfotk.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163thfagxur.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163udkyvakd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163bjdanmmp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hsuxunuk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wfnlppzz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wgjhcnwe.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163gnutsjfn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163wmaysrqk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163sxirkzek.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163mhiuqvuw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163tnwxbvhi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163klkhghdn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163aetbrjmy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qxkcxvav.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163iiiiepwr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163kgsktisf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163glwpmeti.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163njchgkdn.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163sqijhesh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163omhqycpt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163gicwfaup.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163qursjcou.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vkvltyja.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163gvzkmeyj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163opsllirw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163wwwlrpkb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163mvntpkkf.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163pznotnyb.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163tsskamju.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163zbnqjmzw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163kaipzpmv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ldgjwrcc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ochsvlmy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163oxwpzxde.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163inywkxxr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163mcpkvmqv.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163xomefidz.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163pxtemwdi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163tzwzespe.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tuwvjlkl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163oqzivqcy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163peyunjbe.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163udwgzqua.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163rjdunsxd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163uufwmkff.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163uvftgjsh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163bibjsfwe.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163rkzhajwc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163csurkhmi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163akzxgpqj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163dykanplv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163rdilxuhm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163iugobhmm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163uudbknsv.html

[B07] while 循环
来源：http://www.aibaodan.cn/163byrzybjl.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163rkbmhfhv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163yasfgtph.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bqxycigj.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jtrgqauf.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fffyebly.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163iktusuns.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ennrwtxf.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vweohjmn.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163fcghzcal.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163uvqtjijz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163wydrufpc.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hpmpvexe.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qykhaeqm.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yukrxszq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163qqoaquia.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163nsajmudx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mednojoq.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163zjfdyicf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163oinufqiz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163yqozydkq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vilcphsx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xylkbacs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163driwjhzg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163guobkvkm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163mbuojfhj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mcdavvpu.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163eayopzdy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163gyavqihq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rqzxorri.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163kslfkioq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163mklzctqg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163rhdqgvmt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163kugmohhk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163wqylbeld.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ttxxrdfm.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163kzizmaws.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163zkcketlo.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163estpwbzc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163sdssxghg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wcmloudl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163htbqpsri.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163bvszxoef.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163tjsofmud.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fvbukmlf.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ibhguxct.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163qzseyfjx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163qnsouchy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163oedfpffe.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xbkuuuep.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ptcjiqou.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wfupjlwg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163cbxtizzg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ungrvzig.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163vgvmvspz.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163alzderkw.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163slgksfnr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rlffflae.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163iskmtmvn.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163bgkulpiy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163yveetuoy.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163aobigaxd.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163awbyvlxb.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163mtujjbnt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163fqdifhbw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ogkkooki.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pprgobqm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ozvjsruo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163icwmjvmr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163doadoxpz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163skohhnpb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163dpchixaf.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163pdvcviqy.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163aacegsxu.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hhitjhec.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163vyaosdyj.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163rhycmdyl.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ynukthwu.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jppscjuh.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ecqmbnjr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163qvdxfxbg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163rrxovjmp.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ikclfgxc.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163jkmkuwjo.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163otuodnfm.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163azinychh.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163jnstrmun.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163bttlztfo.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163cbfjtdqi.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163fkixajet.html

================================================================================
来源：http://www.aibaodan.cn/163iascutvz.html

C. 函数与作用域
来源：http://www.xuanzx.com/163bkipwhgo.html

================================================================================
来源：http://www.aibaodan.cn/163mnzuaspj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163uhaijzjg.html


<!-- 参考信息 -->