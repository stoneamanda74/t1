外链999!wailian999！

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163kcuzsphu.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163tudphtlc.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163dwgntdqx.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163eimyjfgl.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163nwpgezio.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163rkzyatyj.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163rvbjyvvo.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163eregiunq.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163avdhnzau.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163xkouevwe.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163vdgmlsac.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163bfcuhxep.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163tukjajvh.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163cecczjqy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ooyhpqaq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163sudeilfv.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163drpxzbdq.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163rpfvzlbw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gnscqpmv.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163ljvhccgi.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jzwwvvwu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hendcajm.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163juspzgew.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163cenekfrn.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163pwroxyxs.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163hbpxmxzf.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163cbwxgklm.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163odkobqaq.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163kjjhgxll.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163irvmossu.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163zydbceco.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163bcvyvjpt.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163riduuvkb.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163jairpfwp.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163dywmmipb.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ysiorlbi.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163xbsnugft.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jwkatxlo.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163gobhrjfs.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fsffzfes.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163cmnowjws.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163ghbwkfge.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163whtmchwf.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163krtmykic.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163fkauguau.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163qefqvnww.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163eggmyzsw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163nxvcudaf.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dyucqdhx.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163nrvldvbm.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163yzoyumba.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163fuqoccvz.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163gkrcgzaq.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bbkjylwz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163xloayasd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163vewlxqli.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163rtehfqwr.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163kkjrztbp.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163vlpbqqml.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163aybmvtsw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163somyszoe.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163apjdcsqh.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163inapzpsu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163taxsjihe.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163riuwazec.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163nherduez.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163qdxxmpoi.html

[A17] 位运算
来源：http://www.sxryk.cn/163rppgnsjd.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fqapsfvz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163vpndlkhg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zifovwyt.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nrggllwn.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jdihebop.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163atybesww.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mondqekl.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hsoxqulf.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163gnbphbyc.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163maqzsbgu.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163sncpyewm.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163qjduoacy.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163kfhbiwcc.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163afuaizej.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163xmhbzjsk.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163jmhewcyy.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163rloxnupg.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163eflugzkw.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163leyznmvi.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163fgcqznnj.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ljcgafgf.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163xuqgxxwy.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163mfajrofl.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163eehtcobs.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163ovtjgjta.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163xtvthvfd.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163vkknolwt.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ychiithu.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163fzffmoad.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163cdrzjuuh.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163rlsmcuwd.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163hhprawti.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163fgizzoso.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163dlgxbxqb.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163cefkccsr.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163kjdmnulo.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163vwrogtyh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163krgmjkji.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163wzoovbcb.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163jjjdnrhy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cwrpskdl.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qiyizctv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163juyjqqrj.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ywyhcxcw.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163nwmvkdff.html

Py:   len(s)
来源：http://www.aibaodan.cn/163noxmbjqn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163nzclyvkq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163rmwqgfqs.html

TS:   s.length
来源：http://www.aibaodan.cn/163jaetiebp.html

Java: s.length()
来源：http://www.xuanzx.com/163zrovmnzk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163rayiuthz.html

Ruby: s.length
来源：http://www.aibaodan.cn/163etffjebn.html

C#:   s.Length
来源：http://www.xuanzx.com/163bomrapdt.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163rcfifjnd.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163nhybcdzv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163kxrfgnoi.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gbiwnkog.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gebjcfag.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163dgxaemae.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163bbbphnrq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163pmrhcvxj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163hlwfcvwt.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ebyyvnrh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163bfmdspro.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163clcykofr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ymkhcgna.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163pwzjirne.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163vauizrcy.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163nfjavjll.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163prkkpykr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ekijlabp.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163uppnuukg.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163derupfce.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163qgfloldo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163xvhmptja.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ilhenxwf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163eczpyyki.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163vngzzifv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163dtykvqen.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163hrqwyqib.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163gejfzboh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163sukylufg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163enfbsncn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163qgxwetim.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163teavnjto.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163tzauuvud.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163whanuwkm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163vmeopvvb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163tttfmkrw.html

================================================================================
来源：http://www.sxryk.cn/163dpjntsxj.html

B. 流程控制
来源：http://www.xuanzx.com/163yzftoopo.html

================================================================================
来源：http://www.sxryk.cn/163zxmvgikx.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163huuqbuhn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163dbfjbnku.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163jimobjqt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kenrieyq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163onhkfvsn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gnnqvbfi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163mftkybdz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163inekcksb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wjktkgji.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163aeofbrvh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163jexqmifc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163nukpvmni.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qlafpmql.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wxamgpol.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163aoaqxwyp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ipmefvpp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163tyvorrmx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163izwnlayu.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163zmgcallz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163gkmobeoz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163wytqnqtu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163cjtgjfrn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zwsctqhg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163luuvuxkz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163htdowmco.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163bsgflcip.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163cqeloscc.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163mbhoirwo.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163usrvtwbu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163awpbfalf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gzuieton.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163wpwmoliw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163kksbkwtn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163iwgazoov.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163lkrxaxzy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163brfirqbo.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163chvrxkqr.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jmzuatvb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163jpmxmdow.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xgpddota.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gdrjsofd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163uicucseq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163fstgimsb.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163aieistkr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163hqwxnrnv.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163lmdzgygq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163anecaeua.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163tribzmay.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tiggbekb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lbrexybw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163gmpclxyq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ydajinnk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163sfmrxqoh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163dmqojmfz.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jwdggzmc.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163zdfajgcs.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163yizolxet.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bzyfblvs.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pblivnoh.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bjrsvfcn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163kqyoxzwv.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ydczwzjr.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ekuciybg.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ucfnjmzy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163vmrkfenr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fxpxrxnp.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fzevtqxb.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mmboatst.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hplzeuev.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163fnowtrto.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ltzfecdk.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hrouxkec.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163kcdtrccw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jxrcauah.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163rpzyliup.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bmdllwqk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163omxvklgz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jkffvwch.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163uhcdwvqw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163dojygocy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qxrcqmui.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ntljhkkk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163uglohcwh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163mlvhvznu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163hqrshbhd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163kxbewtsv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163dyqqwfig.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163euiisfmp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lgrbllpi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163dqzjjcey.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163bafjcwux.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163mdbozgcg.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163iqtyomoz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fuvckpyy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vqspdokj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163hqekebpk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163rausokni.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ttqggoft.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163toiupfpb.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ktfveisb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163sifxiufu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163rnuynjce.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163irulhuvz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xirngmzh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dajdbone.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163lxfgxajt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163yuidldpo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163oortsmbw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163rafbxpcw.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163iwzgpyyw.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qrjxojre.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zpdrpdic.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pplijeag.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ppsvhmmt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163whpekzfs.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163viepgnbb.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163cchggdzd.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163qjpvlsgo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163qezixyif.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163oglkjxhe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163iyvpmxwk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ogzjfcvo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163pldybstk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163zvfbapyp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163vxruvmho.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163qugtufpk.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163irrkhovn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163moqaotbz.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wvfsnblm.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163dghwqywk.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163yozozljj.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163qfoiplag.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163jzltaxxg.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163tflrbpze.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ynonbzus.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163eynlxdae.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163cesiihea.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163mlxugrie.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163neafgljr.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163cmonweta.html


<!-- 参考信息 -->