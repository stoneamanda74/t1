外链999!wailian999！

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lywvoqve.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uqsopklz.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vtlopajo.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163sljsmreb.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zrcalpkf.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lmytvyjn.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163ztmkgbwk.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163yzmgrvmn.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163shzyctqa.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ndytgxit.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163nximmkpf.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163tkdyivqa.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163qcbdswlb.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163qumdupny.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163apsgcuww.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163dzbiutad.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163idvhhbqn.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163gnounsff.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ryyprfaz.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163diphjmqb.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163aylvgemz.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163akcgzzyu.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163qhwkjooc.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xjcgccuu.html

[A14] 注释写法
来源：http://www.sxryk.cn/163clriikhs.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163gfrrlvtf.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ajkvqklp.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163abczrbew.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pkufbann.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163wuhwwiqa.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bxhggoae.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163fmjvschp.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ukthpofb.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163kelldpax.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163cyuztkwc.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163bpowchwq.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163arluzkcy.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163rhlsqdwt.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163buaefhgy.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163gtsuqwky.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163hiaodmbu.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163diyujdgj.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163yqrrezxc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163mpiyfack.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163sehqzjyb.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163fjlynjzh.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163shjnamin.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ogxvsyed.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ucqzsqin.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163ftrtukkl.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163jffllqni.html

[A17] 位运算
来源：http://www.aibaodan.cn/163lxuwffwv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pdxonfqa.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163rrwwpkva.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cvdiczjy.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163rrzzteuf.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ovjsepba.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163swkuqozo.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ssrxeokq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qmuoqbgh.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163hafebsyd.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163ukaowwpu.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163ifbqceyf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163tkfmqguq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163qxsxwtpr.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163luzonvcm.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163wlfxsull.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163jthsnzlb.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163meoqescf.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163ktjalirg.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163ryqyedbw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163snwrpmop.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163hjvzctze.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ezxbfwet.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ovuqleme.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163pakenrvq.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163uumaghgk.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163scjxcsgv.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163rztfacgb.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163pyrizgyn.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163jwrwcdgv.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163cyanoalq.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163cqepdgkk.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163pdknxqpd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163kksllpmx.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163xijirjxt.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163zqmctyrb.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163iqamuuss.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163wthhdins.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ftdxygin.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163jyjvxugd.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fvtxrjcc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hjhiwcjl.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lgtcjsac.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163uhqmxnuh.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163mgzybslq.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163rkibntwv.html

Py:   len(s)
来源：http://www.aibaodan.cn/163jrkidjvk.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163gfgzhqoo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163fkaxlnfj.html

TS:   s.length
来源：http://www.xuanzx.com/163mohczslw.html

Java: s.length()
来源：http://www.xuanzx.com/163hmtmmsbg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163gnkypubm.html

Ruby: s.length
来源：http://www.aibaodan.cn/163oasptcdu.html

C#:   s.Length
来源：http://www.aibaodan.cn/163kdnwsdsp.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163eolgcxwe.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163hfnsqjts.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xdxaieby.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lhwpasiz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163puxwvmmi.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qejvgycg.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163gqngeqqr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163yqcoiglc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ltnnaxrc.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163cfcwvfqr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163obxgseug.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ssxdtygr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163yayfosfb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ocyikgcx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163nuwkfuqo.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163cczjxgrr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163feqhzfro.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163seyifluh.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163cwbsbahy.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163qepmclkg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163piioikoh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163wkmihije.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fdlhxgyq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163ozstykpz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163eqpdfshd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163gmfqjfyx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163kvvwgsri.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163vmdqnnol.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163crpzedcg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163qeynmcqc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ixqtbkmi.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ltzmxkyg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163yqkvrgmp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163btdokxux.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163kimfqzxf.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ybbwmdvp.html

================================================================================
来源：http://www.xuanzx.com/163facocukf.html

B. 流程控制
来源：http://www.sxryk.cn/163zfybmyzp.html

================================================================================
来源：http://www.sxryk.cn/163lsmlcdpy.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163lacleieo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163bvbupqqa.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163pbdcwnqp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lboaxban.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kvkzfrul.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zdvzsglx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163adohivso.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163dpjpdwna.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uaikueux.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163omorywcu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163zghllbws.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163gqmvdnty.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rwlykdre.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vlpcekfn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163svhfmnzu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163rukthelv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163jrqwbuoo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ctxmlhyq.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163nmlfqhjz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163aekvtayp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163inxweaoz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lquojgko.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163shpcpqep.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163qbaxivif.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163spgtvmld.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163gkjwcugo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163mlyargtu.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ckkfwuox.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ndqazljj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mrdovbsv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163pzesqzis.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kzjzkcpr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163jaiweuqf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163tlpvslrb.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163dykknobo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163utpetoxe.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163uadlwdgd.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163cqthlnsl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163hsoacojo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ocduabmj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163hpmjstqk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163vtskmohh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rtahzxvk.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163qzjxzdaj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163xqbecbao.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163tgwirrbz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163qfqahxca.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ctnimpfb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vocsycgw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163xydbqlbl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163eqeecgay.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ppzbexfd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163bnyxnwxr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ogifyqns.html

[B07] while 循环
来源：http://www.xuanzx.com/163wbpxrsmx.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163pxbxtows.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163lhzfyyrd.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bustlcpu.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mdnaccco.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ulyjyvet.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ajafkela.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ydumjtzk.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tcvhrvrq.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163eyplnbcx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163knvgdnrm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163hwmmhdos.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jhaycvoo.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163shalogbh.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rlqhjdeo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163mwlelzyo.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163muvoriio.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mljsvglv.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xkgsszrj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163tcwnmbdk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163zibvjmsv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163guknkrkp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wkjsipsk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ipdrfkla.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163uzpeitvy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163lzcymwfd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eqvwkhno.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163yndzbiye.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163qdykjsnk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163xomjizqa.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163bzkxyeow.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163lxikdnzd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163fslguqak.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163kxaqcxbi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163uyrmcupj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ajwepjri.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163zednbqek.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ccygprzr.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dqbvyiaq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163arpsygil.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vbkjdzox.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163xhynlxgp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163psfrpwja.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163rhbvyaid.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163beevjzdi.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163pyjwqetg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163spfazcun.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163qxzgtbtq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xrkrqxel.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nbvzfome.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163onkghfij.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163hpxyspxy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163brxoucla.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163kvelrlzo.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qhlkqyil.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163rqscsbid.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163vxgsnbfq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wlknixnr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163knwrbomt.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163cmpkavnq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163zltmntqp.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163cciwstfw.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163spgadatt.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rfmmfrtq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163cfqdrgmq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163holhqobf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ydiupwip.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nsrqwjyu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163dmblcgzw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163lpvsqjje.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163uddplpud.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163pdwptphy.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163deblhnuy.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163avjtrote.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163zlduplcb.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163qfnyqcnd.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163dgdozrzj.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xlzilxbk.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163bmrbsxee.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163tgxsvuvp.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163whfehglz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163fppqsfbm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163gpayyukb.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163hkjlewrv.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xgotjvkh.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163utzhxfwm.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163itfizeqh.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163aorvjizj.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163tneynflx.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163vuemlqtq.html

================================================================================
来源：http://www.aibaodan.cn/163exvouiuc.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163itqmgxpp.html

================================================================================
来源：http://www.aibaodan.cn/163wovhfmxw.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ikcivzsr.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163hprfysyv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xazjnyeh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163qxyhseuy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ycfwdfbp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nxoyqxoo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163gerlsegg.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163hpbaimjc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lgmytqtg.html


<!-- 参考信息 -->