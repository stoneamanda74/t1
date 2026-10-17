外链999!wailian999！

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163txinwpqx.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163ecdbvfal.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163inotxpbl.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163iwuyxeuc.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163ysxhzesd.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163bzablkof.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163wytadhje.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163egatjkti.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163wtyasltp.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ndtpmhwh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163kaeqhpbj.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163jakacokl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163jzaecogk.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163lldivtzm.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163tvjankjo.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163hasrlohi.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163kfveaopm.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163egvadzxl.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163hqcxflbg.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163buovmdvj.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163spzeaora.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163gacmeccy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163wihdruay.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163lpblvtpg.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163aitpvzez.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163cslthnoa.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163zrsziypv.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163urudvcyz.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bcpfigsp.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nishqfwn.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dkhglnpn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163fepynotw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163whhtsfkc.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bdyzaggn.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163mxlgityi.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163thhvtqhi.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163imllfdtb.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163uwisfxql.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163euswjwuw.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163qeezgcpz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163fnxfbcwo.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163mpugunpe.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163hyhwvwtc.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163gyqwdttv.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hxhinkfn.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163kytjqyyw.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fgraidqt.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163abxrdakl.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163ckmlkbpc.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bpzblgnb.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ntuwdtwy.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zlstukdk.html

[A14] 注释写法
来源：http://www.sxryk.cn/163ncalasxv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163xqnkhmbg.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163nvxzuzvg.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fsjkkcin.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ncjzbwcp.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163fplsbzmm.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jmwkncnq.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163moxwrhfh.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163nvcaaeev.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163dmoajmof.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163rhiwzcrh.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163itaypuxk.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163kcrcxtgt.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163myblqnjt.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163wuvdbpzt.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163glsbwovl.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163bugykjwu.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163yupsbkqr.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163kzmryxwh.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163pxjacmzz.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ddkmtczq.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163zkvykfph.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163npdfiedd.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163fpfyepmt.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163fokuezpk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163eolotmsq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163kpwxbqsq.html

[A17] 位运算
来源：http://www.xuanzx.com/163atkptude.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163brzrqujn.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163amwstevi.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tvkcvnhy.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uykgblvy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nccrdxln.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cfkoyebn.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qyatmqst.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dkaomtkx.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163jzjokvzs.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163qqhmcdpb.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163pzkocsft.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163aszxwxrk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163aeuqyjxz.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163kkhxxldo.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163fkvimqrj.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163dthavqns.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ivwwgdtn.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163fluniwlw.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163xmamggln.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163zypehxuu.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163qfxztsnj.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ocoevaew.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163lcuxrywu.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ouambdmk.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163igvjhjmd.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163plfklpkk.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163hysnehtb.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163desgxpju.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163inszruqw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163vkebmetq.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163zruniiue.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163umnwikmv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163myrrsyye.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163lyjnywyd.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ntubepdz.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163iyytzxti.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163hozbhyix.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163igppydrf.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163qkhvrjiv.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ktwdpgkn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ujrtokuq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rsipidal.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ywonzpwc.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163bnmlgtqt.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163fhsfnftd.html

Py:   len(s)
来源：http://www.xuanzx.com/163owahwfsy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163hktlwakx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163qrdfprgi.html

TS:   s.length
来源：http://www.sxryk.cn/163gstxwaud.html

Java: s.length()
来源：http://www.xuanzx.com/163qbiflydy.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163pujjwpqg.html

Ruby: s.length
来源：http://www.sxryk.cn/163eesrettq.html

C#:   s.Length
来源：http://www.sxryk.cn/163bvlzokay.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ifjxuhmj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163gufvofwz.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163sqwqvvki.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dtegvabz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163mxtkpsjw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163acywcyvx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163pwkelhfu.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ieapxcbs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163uibszuly.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163iramaloe.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163rfvjfajz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163vqgvgfnp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163oufmjdnv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dolecxju.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163uleolkno.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ipyagcmm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163sqmntdqy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163jczcjmyk.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163sdoufmli.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163heirnnnp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163vcftqnqo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ddzcfhep.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163plcshrso.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163kcctagqj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163wqzluxmw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ujszymxc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163kmejolcj.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163jtyzggap.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163rfottcdz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163bcjyamir.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163gwulicnz.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163qixxsbql.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163lxuhmasy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163jisxefdb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163msepxtar.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163qofsppqx.html

================================================================================
来源：http://www.xuanzx.com/163ddjmmiph.html

B. 流程控制
来源：http://www.aibaodan.cn/163ysawidtb.html

================================================================================
来源：http://www.aibaodan.cn/163wrofhaji.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vpnxgtjs.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163pdfomddc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163wfhcfblw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ilpsjauh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cgodvcpt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dxgmhgva.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163bbfhhakq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163dsuijgpf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163uyjhmmko.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163rgecbqzn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163gutrhjhy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163erpcitbg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163flmdtpla.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163csryyory.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bunfwjqp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ehpomzjk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163nfyeuopq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163swkjdnct.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163telglqhe.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163gberizqg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163lpwhctzi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vjvhjmbo.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163paqnnyka.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163dulofgnp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163kaezaqek.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163bpsosjsx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163crihzzzu.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163issueylo.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163yrkosghw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163xgjeqgrj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tsrhlkgr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163awtuoolu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163wjngiiit.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163zhxsklcg.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163xdjfpqph.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ewuungbz.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163gatndscy.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163gtgrbzgz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163qzdunzri.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163misqqhiu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rnzwknjg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163nmrvfxoe.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163fexgsiky.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163bqncixvt.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163cxyteaxm.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163eklvmiuz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163kusqigsu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163nnoifoku.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vhwfdgoj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163krrzvvhf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163yrfrsyup.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ywzinruf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ykpjjnmi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163tjajtfzx.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jeqndkqs.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163csgdzwuq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163bpesbfnu.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lqlxqezk.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dlvadano.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nmbkvosy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163fgxgisos.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ssfdbklj.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163odwhpcvc.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rzsawylv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163phfgdihc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163hszobbpy.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lopfykwd.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ovoopcjo.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yerawmvi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163yhmpclha.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163xsnwetba.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163agspvkzn.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163tujyztxr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163hsourcsy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163pafdpvku.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kpkikdst.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fdhpebge.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ajenvmcs.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qqacefto.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163vhvcqhcl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tdurrhhu.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163pnzmnrvw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163jvplffld.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jnmutptr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163zsjepeul.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163vpkcodpq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163uuurfcfh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163qqnugnby.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163kgwgbcjn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ndthiwfb.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163kvgjsqdu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163uyxfnfzy.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ervbghpb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mdiegbhz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ijguzwtz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163oxqecxpz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163juqnkwyz.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163yjqruxxs.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163fnrlxbkn.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163yqqbhtsx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163zhmwawum.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163lzenzxxz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163stglqulj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bxkatmko.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gtdxivil.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bwtmnqlw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163klahkwsl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ivetgxyf.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163dubccgwx.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163uzwvkvpq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163vwdhoyap.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ntldxbke.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zkpzvdqu.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163pnamantq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163lemzdtsk.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163pmrxllwb.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163pmoumvnx.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rauzeqjd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163fxppymnt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ilgealvs.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nsxqrvaf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cjcbepuq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163rwnmapqv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163jnjkitpk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163iqeroqim.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163uxawiiud.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163hsfqxhsz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163fskxjvmk.html


<!-- 参考信息 -->